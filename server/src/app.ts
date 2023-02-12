import express from 'express';
import { config } from 'dotenv';
config();
import { Application } from 'express';
import cors from 'cors';
import UserRouter from './routers/UserRouter';

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
    }
    routes(){
        this.app.use('/users',UserRouter);
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