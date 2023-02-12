import User from "../models/User";

class UserSevrice{
    async createUser(){
        try{
            await User.createUser();
        }
        catch (e) {
            return e;
        }
    }
}

export default new UserSevrice();