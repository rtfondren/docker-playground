"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
exports.usersRoute = express_1.default.Router();
/* GET home page. */
exports.usersRoute.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});
//# sourceMappingURL=users.js.map