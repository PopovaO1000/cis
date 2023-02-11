"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exceljs_1 = __importDefault(require("exceljs"));
const PORT = 5000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const workbook = new exceljs_1.default.Workbook();
    const sheet = workbook.addWorksheet('My Sheet');
    workbook.worksheets[0].getCell('C3').value = 'vkusik';
    workbook.xlsx.writeFile("Working.xlsx");
});
app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
