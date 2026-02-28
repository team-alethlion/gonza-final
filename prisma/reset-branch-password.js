import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const args = process.argv.slice(2);
  const branchName = args[0];
  const newPassword = args[1] || 'password123';

  if (!branchName) {
    console.log(`Usage: node prisma/reset-branch-password.js "<Branch Name>" [optional_password]`);
    console.log(`Example: node prisma/reset-branch-password.js "Main Branch"`);
    
    try {
        const allBranches = await prisma.branch.findMany({ select: { name: true } });
        console.log(`\nAvailable branches:`);
        allBranches.forEach(b => console.log(`- ${b.name}`));
    } catch (e) {
        console.log(`\nNote: Ensure your database is running and Prisma client is generated.`);
        console.error(e);
    }
    return;
  }

  const hash = await bcrypt.hash(newPassword, 10);
  
  const branch = await prisma.branch.findFirst({
    where: { 
      name: {
        equals: branchName,
        mode: 'insensitive'
      }
    }
  });

  if (branch) {
    await prisma.branch.update({
      where: { id: branch.id },
      data: { accessPassword: hash }
    });
    console.log(`\n✅ Success!`);
    console.log(`Branch: ${branch.name}`);
    console.log(`New Password: ${newPassword}`);
    console.log(`Database updated with fresh bcrypt hash.`);
  } else {
    console.log(`\n❌ Error: Branch "${branchName}" not found.`);
    const allBranches = await prisma.branch.findMany({ select: { name: true } });
    console.log(`Available branches:`);
    allBranches.forEach(b => console.log(`- ${b.name}`));
  }
}

main()
  .catch((e) => {
    console.error(`\n❌ Execution failed:`);
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
