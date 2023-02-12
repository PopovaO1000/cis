"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
function main() {
    const app = new app_1.App(process.env.PORT);
    app.start();
}
main();
// import express from 'express';
// import ExcelJS from 'exceljs';
// app.get('/', (req, res) => {
//     // const workbook = new ExcelJS.Workbook();
//     // const sheet = workbook.addWorksheet('My Sheet');
//     // workbook.worksheets[0].getCell('C3').value = 'vkusik';
//     // workbook.xlsx.writeFile("Working.xlsx");
// });
