"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoute = void 0;
const express_1 = __importDefault(require("express"));
exports.indexRoute = express_1.default.Router();
/* GET home page. */
exports.indexRoute.get('/', function (req, res) {
    res.send('express + TS server');
});
//# sourceMappingURL=index.js.map