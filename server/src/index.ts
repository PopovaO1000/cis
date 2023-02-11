import express from 'express';
import ExcelJS from 'exceljs';

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('My Sheet');
    workbook.worksheets[0].getCell('C3').value = 'vkusik';
    workbook.xlsx.writeFile("Working.xlsx");
});

app.listen(PORT, ()=> console.log('SERVER STARTED ON PORT ' + PORT))