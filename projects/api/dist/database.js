"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=database.js.map