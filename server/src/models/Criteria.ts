import { connection } from "../db";

interface criteria {
    title: Array<string>,
    disc: Array<string>
}
class Criteria{
    async createCriteria(data: criteria){
        try{
            const conn = await connection();
            let i = 0;
            while (i<22){
                await conn.query('INSERT INTO `criteria`(`title`,`disc`) VALUES (?,?)',[data.title[i],data.disc[i]]);
                i++;
            }
        }
        catch (e) {
            return e;
        }
    }
}

export default new Criteria();