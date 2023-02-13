import {App} from "./app";

function main(){
    const app = new App(process.env.PORT);
    app.start();
}

main();

// import ExcelJS from 'exceljs';
// app.get('/', (req, res) => {
//     // const workbook = new ExcelJS.Workbook();
//     // const sheet = workbook.addWorksheet('My Sheet');
//     // workbook.worksheets[0].getCell('C3').value = 'vkusik';
//     // workbook.xlsx.writeFile("Working.xlsx");
// });
