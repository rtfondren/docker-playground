import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function runQueries() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

runQueries()
  .then(async () => await prisma.$disconnect)
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect;
    process.exit(1);
  });
