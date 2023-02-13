import Criteria from "../models/Criteria";
import ExcelJS from 'exceljs';

interface criteriaData {
    title: string,
    disc: string,
    fileName: string
}
class CriteriaService{
    async createCriteria(data: criteriaData){
        try{
            const title: (string)[] = [];
            const disc: (string)[] = [];
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile('./excel_doc/'+data.fileName);
            const worksheet = await workbook.getWorksheet('бланк оценки презентации');
            const nameCol = await worksheet.getColumn('B');
            await nameCol.eachCell(function(cell, rowNumber) {
                if(rowNumber >= 5 && rowNumber <= 27){
                    if (typeof cell.value === "string") {
                        title.push(cell.value);
                    }
                }
            });
            const nameColl = await worksheet.getColumn('C');
            await nameColl.eachCell(function(cell, rowNumber) {
                if(rowNumber >= 5 && rowNumber <= 27){
                    if (typeof cell.value === "string") {
                        disc.push(cell.value);
                    }
                }
            });
            const res = {title,disc};
            await Criteria.createCriteria(res);
        }
        catch (e) {
            return e;
        }
    }
}

export default new CriteriaService();