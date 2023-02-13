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
const CriteriaService_1 = __importDefault(require("../services/CriteriaService"));
class CriteriaController {
    createCriteria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const title = req.body.title;
                const disc = req.body.disc;
                if (req.files) {
                    let file = req.files.excel;
                    const fileName = file.name;
                    yield file.mv('./excel_doc/' + fileName);
                    yield CriteriaService_1.default.createCriteria({ title, disc, fileName });
                    return res.send('vkus');
                }
                else {
                    return res.send('Не выбран файл');
                }
            }
            catch (e) {
                return res.send(e);
            }
        });
    }
}
exports.default = new CriteriaController();
