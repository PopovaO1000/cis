import { connection } from "../db";

class User{
    async createUser(){
        try{
            const conn = await connection();
            const users = await conn.query('INSERT INTO `users`() VALUES ()');
        }
        catch (e) {
            return e;
        }
    }
}

export default new User();