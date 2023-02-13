import { Request, Response } from "express";
import CriteriaService from "../services/CriteriaService";
import {UploadedFile} from "express-fileupload";

class CriteriaController{
    async createCriteria(req: Request,res: Response){
        try{
            const title = req.body.title;
            const disc = req.body.disc;
            if(req.files){
                let file = req.files.excel as UploadedFile;
                const fileName = file.name;
                await file.mv('./excel_doc/'+fileName);
                await CriteriaService.createCriteria({title, disc, fileName});
                return res.send('vkus');
            }
            else {
                return res.send('Не выбран файл');
            }
        }
        catch (e) {
            return res.send(e);
        }
    }
}

export default new CriteriaController();