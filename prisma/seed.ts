/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from './db';
import bcrypt from 'bcryptjs';

const prisma = db;

async function main() {
    console.log('🌱 Starting database seed...');

    // Create Permissions
    console.log('Creating permissions...');
    const permissions = await Promise.all([
        prisma.permission.upsert({
            where: { name: 'users:view' },
            update: {},
            create: { name: 'users:view', description: 'View users' },
        }),
        prisma.permission.upsert({
            where: { name: 'users:edit' },
            update: {},
            create: { name: 'users:edit', description: 'Edit user accounts' },
        }),
    ]);

    console.log(`✓ Created ${permissions.length} permissions`);

    // Create Roles
    console.log('Creating roles...');

    // Superadmin (Admin App)
    let superAdminRole = await prisma.role.findFirst({ where: { name: 'superadmin' } });
    if (!superAdminRole) {
        superAdminRole = await prisma.role.create({
            data: {
                name: 'superadmin',
                description: 'Super Administrator (Admin App)',
                permissions: {
                    connect: permissions.map((p: { id: any; }) => ({ id: p.id })),
                },
            },
        });
    } else {
        superAdminRole = await prisma.role.update({
             where: { id: superAdminRole.id },
             data: {
                 permissions: {
                     connect: permissions.map((p: { id: any; }) => ({ id: p.id })),
                 }
             }
        });
    }

    // Admin (Client App)
    let adminRole = await prisma.role.findFirst({ where: { name: 'admin' } });
    if (!adminRole) {
        adminRole = await prisma.role.create({
            data: {
                name: 'admin',
                description: 'Administrator (Client App)',
                permissions: {
                    connect: permissions.map((p: { id: any; }) => ({ id: p.id })),
                },
            },
        });
    } else {
        adminRole = await prisma.role.update({
             where: { id: adminRole.id },
             data: {
                 permissions: {
                     connect: permissions.map((p: { id: any; }) => ({ id: p.id })),
                 }
             }
        });
    }

    // Manager (Client App)
    let managerRole = await prisma.role.findFirst({ where: { name: 'manager' } });
    if (!managerRole) {
        managerRole = await prisma.role.create({
            data: {
                name: 'manager',
                description: 'Manager (Client App)',
                permissions: {
                    connect: [{ name: 'users:view' }],
                },
            },
        });
    } else {
        managerRole = await prisma.role.update({
             where: { id: managerRole.id },
             data: {
                 permissions: {
                     connect: [{ name: 'users:view' }],
                 }
             }
        });
    }

    console.log('✓ Created roles: superadmin, admin, manager');

    // Create Default Packages
    console.log('Creating default packages...');
    const packages = await Promise.all([
        prisma.package.upsert({
            where: { name: 'Starter' },
            update: {},
            create: {
                name: 'Starter',
                description: 'Perfect for small shops starting out.',
                monthlyPrice: 50000,
                yearlyPrice: 500000,
                maxUsers: 2,
                maxProducts: 50,
                maxSalesPerMonth: 200,
                maxCustomers: 100,
                hasFreeTrial: true,
                trialDays: 14,
                isDefault: true
            }
        }),
        prisma.package.upsert({
            where: { name: 'Professional' },
            update: {},
            create: {
                name: 'Professional',
                description: 'Everything you need to grow your retail business.',
                monthlyPrice: 120000,
                yearlyPrice: 1200000,
                maxUsers: 10,
                maxProducts: 1000,
                maxSalesPerMonth: 5000,
                maxCustomers: 2000,
                hasFreeTrial: true,
                trialDays: 14
            }
        }),
        prisma.package.upsert({
            where: { name: 'Enterprise' },
            update: {},
            create: {
                name: 'Enterprise',
                description: 'Unlimited power for large scale operations.',
                monthlyPrice: 350000,
                yearlyPrice: 3500000,
                unlimitedUsers: true,
                unlimitedProducts: true,
                unlimitedSales: true,
                unlimitedCustomers: true,
                hasFreeTrial: false
            }
        })
    ]);
    console.log(`✓ Created ${packages.length} default packages`);

    // Create Users
    console.log('Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Superadmin User
    const isSuperadminMode = process.argv.includes('--superadmin');
    
    if (isSuperadminMode) {
        console.log('\n[Superadmin Mode] Overriding Superadmin with new values...');
        const adminPassword = await bcrypt.hash('SecureAdmin123!', 12);
        const existingAdmin = await prisma.user.findFirst({
            where: { role: { name: 'superadmin' } }
        });

        if (existingAdmin) {
            await prisma.user.update({
                where: { id: existingAdmin.id },
                data: {
                    email: 'superadmin@gonzasystems.com',
                    password: adminPassword,
                    name: 'Gonza Super Admin',
                    status: 'active',
                    passwordResetRequired: false
                }
            });
        } else {
            await prisma.user.create({
                data: {
                    email: 'superadmin@gonzasystems.com',
                    password: adminPassword,
                    name: 'Gonza Super Admin',
                    roleId: superAdminRole.id,
                    emailVerified: new Date(),
                    status: 'active',
                    passwordResetRequired: false
                }
            });
        }
    } else {
        await prisma.user.upsert({
            where: { email: 'superadmin@gonza.com' },
            update: {
                roleId: superAdminRole.id,
                password: hashedPassword
            },
            create: {
                email: 'superadmin@gonza.com',
                password: hashedPassword,
                name: 'Super Admin',
                emailVerified: new Date(),
                roleId: superAdminRole.id,
            },
        });
    }

    // Create Agency
    console.log('\nCreating default agency...');
    let defaultAgency = await prisma.agency.findFirst({ where: { name: 'Gonza Default Agency' } });
    if (!defaultAgency) {
        defaultAgency = await prisma.agency.create({
            data: {
                name: 'Gonza Default Agency',
                subscriptionStatus: 'active'
            }
        });
    }

    // Client Admin User
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@gonza.com' },
        update: {
            roleId: adminRole.id,
            password: hashedPassword,
            agencyId: defaultAgency.id,
        },
        create: {
            email: 'admin@gonza.com',
            password: hashedPassword,
            name: 'Client Admin',
            emailVerified: new Date(),
            roleId: adminRole.id,
            agencyId: defaultAgency.id,
        },
    });

    // Create Branches for the admin
    console.log('Creating branches...');
    const mainBranch = await prisma.branch.upsert({
        where: { name: 'Main Branch' },
        update: { 
            adminId: adminUser.id,
            agencyId: defaultAgency.id,
            accessPassword: '0000'
        },
        create: {
            name: 'Main Branch',
            location: 'Kampala',
            adminId: adminUser.id,
            agencyId: defaultAgency.id,
            accessPassword: '0000'
        }
    });

    await prisma.branch.upsert({
        where: { name: 'Sub Branch' },
        update: { 
            adminId: adminUser.id,
            agencyId: defaultAgency.id,
            accessPassword: '0000'
        },
        create: {
            name: 'Sub Branch',
            location: 'Entebbe',
            adminId: adminUser.id,
            agencyId: defaultAgency.id,
            accessPassword: '0000'
        }
    });
    console.log('✓ Created branches: Main Branch, Sub Branch');

    // Client Manager User
    await prisma.user.upsert({
        where: { email: 'manager@gonza.com' },
        update: {
            roleId: managerRole.id,
            password: hashedPassword,
            agencyId: defaultAgency.id,
            branchId: mainBranch.id,
            pin: '1234'
        },
        create: {
            email: 'manager@gonza.com',
            password: hashedPassword,
            name: 'Client Manager',
            emailVerified: new Date(),
            roleId: managerRole.id,
            agencyId: defaultAgency.id,
            branchId: mainBranch.id,
            pin: '1234'
        },
    });

    console.log('✓ Created users:');
    if (isSuperadminMode) {
        console.log('  - superadmin@gonzasystems.com (Super Admin - Updated)');
    } else {
        console.log('  - superadmin@gonza.com (Superadmin)');
    }
    console.log('  - admin@gonza.com (Client Admin)');
    console.log('  - manager@gonza.com (Client Manager)');

    console.log('  Password for all: password123');
    console.log('  Branch Access Password: 0000');
    console.log('  Manager PIN: 1234');
    console.log('🎉 Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('Error during seeding:', e);
        process.exit(1);
    });
