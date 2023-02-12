import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController{
    async createUser(req: Request,res: Response){
        try{
            await UserService.createUser();
            return res.send('vkus');
        }
        catch (e) {
            return res.send(e);
        }
    }
}

export default new UserController();
