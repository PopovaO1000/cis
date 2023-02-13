"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Criteria_1 = __importDefault(require("../models/Criteria"));
const exceljs_1 = __importDefault(require("exceljs"));
class CriteriaService {
    createCriteria(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const title = [];
                const disc = [];
                const workbook = new exceljs_1.default.Workbook();
                yield workbook.xlsx.readFile('./excel_doc/' + data.fileName);
                const worksheet = yield workbook.getWorksheet('бланк оценки презентации');
                const nameCol = yield worksheet.getColumn('B');
                yield nameCol.eachCell(function (cell, rowNumber) {
                    if (rowNumber >= 5 && rowNumber <= 27) {
                        if (typeof cell.value === "string") {
                            title.push(cell.value);
                        }
                    }
                });
                const nameColl = yield worksheet.getColumn('C');
                yield nameColl.eachCell(function (cell, rowNumber) {
                    if (rowNumber >= 5 && rowNumber <= 27) {
                        if (typeof cell.value === "string") {
                            disc.push(cell.value);
                        }
                    }
                });
                const res = { title, disc };
                yield Criteria_1.default.createCriteria(res);
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.default = new CriteriaService();
