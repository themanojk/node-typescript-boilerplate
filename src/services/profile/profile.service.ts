"use strict";
// Interfaces
import {UserInterface} from "../../typescript_helpers/interfaces/userInterfaces";
import User from "../../models/User";

class ProfileService {
    async getUsers(): Promise<any[]> {
        try {
            let users = await User.fetchAll();
            const usersJson: UserInterface[] = users.toJSON();
            return usersJson;           
        }
        catch(err) {
            throw err;
        }
    }

    async insertUser(data: UserInterface): Promise<any> {
        try {
            let user = await new User(data).save();
            return user.toJSON();
        } catch(err) {
            throw err;
        }
    }

    async getUserById(id: string): Promise<any> {
        try {
            let users = await new User().where({id}).fetch();;
            const usersJson: UserInterface = users.toJSON();
            return usersJson;           
        }
        catch(err) {
            throw err;
        }
    }

}

export default new ProfileService();