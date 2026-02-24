import { db } from './db'
import { hash } from 'bcryptjs'

const prisma = db

async function main() {
  console.log('Seeding Super Admin...')

  try {
    // 1. Ensure the superadmin role exists
    let superadminRole = await prisma.role.findFirst({
      where: { name: 'superadmin' }
    })

    if (!superadminRole) {
      console.log('Creating superadmin role...')
      superadminRole = await prisma.role.create({
        data: {
          name: 'superadmin',
          description: 'Global administrator with full platform access'
        }
      })
    }

    // 2. Check if a superadmin already exists
    let existingAdmin = await prisma.user.findFirst({
      where: { role: { name: 'superadmin' } }
    })

    const adminPassword = await hash('SecureAdmin123!', 12)

    if (existingAdmin) {
      console.log('A superadmin account already exists:', existingAdmin.email)
      console.log('Resetting the password to default for testing purposes...')
      
      existingAdmin = await prisma.user.update({
         where: { id: existingAdmin.id },
         data: { password: adminPassword }
      })

      console.log('✅ Overwrote Super Admin password!')
      console.log('-----------------------------------')
      console.log(`Email: ${existingAdmin.email}`)
      console.log(`Password: SecureAdmin123!`)
      console.log('-----------------------------------')
      return
    }

    // 3. Create the Super Admin user
    const adminEmail = 'superadmin@gonzasystems.com'

    console.log('Creating new superadmin account...')
    const newAdmin = await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Gonza Super Admin',
        password: adminPassword,
        roleId: superadminRole.id,
        emailVerified: new Date(),
        status: 'active',
        passwordResetRequired: false
      }
    })

    console.log('✅ Super Admin successfully seeded!')
    console.log('-----------------------------------')
    console.log(`Email: ${newAdmin.email}`)
    console.log(`Password: SecureAdmin123!`)
    console.log('-----------------------------------')
    console.log('⚠️ Please change this password immediately after logging in.')

  } catch (error) {
    console.error('Error seeding Super Admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
