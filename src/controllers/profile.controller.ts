// Requirements
import {logErrorAndSendToErrHandler, successHandler} from "../utils/responseHandlers";
import * as ei from "../typescript_helpers/interfaces/express";
import statusCode from "../utils/statusCode";
import profileService from "../services/profile/profile.service";
import { handleStringParam } from "../utils/helper";

// Interfaces
import {UserInterface} from "../typescript_helpers/interfaces/userInterfaces";


class ProfileController {
    async getUsers(req: ei.Request, res: ei.Response): Promise<void> {
        try {
            let data: UserInterface[] = await profileService.getUsers() || [];
            successHandler(statusCode.SUCCESS.message, data, req, res);
        }
        catch(err) {
            return logErrorAndSendToErrHandler(req, statusCode.SOMETHING_WENT_WRONG.code, statusCode.SOMETHING_WENT_WRONG.message, res, "getUsers", req.originalUrl, err);
        }
    }

    async insertUser(req: ei.Request, res: ei.Response): Promise<void> {
        try {
            let username: string = handleStringParam(req.body.username); //This is used to check if only string is being sent or not
            let password: string = handleStringParam(req.body.password);

            if(!username) return logErrorAndSendToErrHandler(req, statusCode.BAD_REQUEST.code, statusCode.BAD_REQUEST.message, res, "insertUser", req.originalUrl)

            let body: UserInterface = {username, password}
            let data: UserInterface = await profileService.insertUser(body) || {};
            successHandler(statusCode.SUCCESS.message, data, req, res);
        }
        catch(err) {
            return logErrorAndSendToErrHandler(req, statusCode.SOMETHING_WENT_WRONG.code, statusCode.SOMETHING_WENT_WRONG.message, res, "insertUser", req.originalUrl, err);
        }
    }

    async getUserById(req: ei.Request, res: ei.Response): Promise<void> {
        try {
            let id: string = handleStringParam(req.params.id);

            let data: UserInterface = await profileService.getUserById(id) || {};
            successHandler(statusCode.SUCCESS.message, data, req, res);
        }
        catch(err) {
            return logErrorAndSendToErrHandler(req, statusCode.SOMETHING_WENT_WRONG.code, statusCode.SOMETHING_WENT_WRONG.message, res, "getUserById", req.originalUrl, err);
        }
    }
}

export default new ProfileController();