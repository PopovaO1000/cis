import express from 'express';
import { config } from 'dotenv';
config();
import { Application } from 'express';
import cors from 'cors';
import fileUpload from "express-fileupload";
import userRouter from './routers/UserRouter';
import criteriaRouter from "./routers/CriteriaRouter";

export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.usages();
        this.routes();
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 5000);
    }
    usages(){
        this.app.use(cors({
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"],
            credentials: true
        }));
        this.app.use(express.json());
        this.app.use(fileUpload({}));
        this.app.use(express.static('./excel_doc'));
    }
    routes(){
        this.app.use('/users',userRouter);
        this.app.use('/criteria',criteriaRouter);
    }
    async start(){
        try {
            this.app.listen(this.app.get('port'));
            console.log(`Server works on PORT ${this.app.get('port')}`);
        }
        catch (e) {
            console.log(e)
        }
    }
}