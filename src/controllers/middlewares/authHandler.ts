// Dependencies
const jwt = require("jsonwebtoken");

// Requirements
import {logErrorAndSendToErrHandler} from "../../utils/responseHandlers";
import config from "../../config/config";
import * as ei from "./../../typescript_helpers/interfaces/express";
import {JwtTokenResposne} from "./../../typescript_helpers/interfaces/validations";
import statusCode from "./../../utils/statusCode";

class AuthController {
    verifytoken(req: ei.Request, res: ei.Response, next: ei.NextFunction) {
        // Check if bearer is undefined
        if(req.headers['authorization']) {
            req.token = req.headers['authorization'];
            // Extract data
            jwt.verify(req.token, config.auth_secret_key, async (err: any, authData: JwtTokenResposne) => {
                if(err) {
                    console.log("err", err);
                    return logErrorAndSendToErrHandler(req, statusCode.TOKEN_AUTHENTICATION_FAILED.code, statusCode.TOKEN_AUTHENTICATION_FAILED.message, res, "verifytoken", req.originalUrl, err);
                }
                req.decoded = authData;
        
                return next();
                });
        } else {
            return logErrorAndSendToErrHandler(req, statusCode.TOKEN_AUTHENTICATION_FAILED.code, statusCode.TOKEN_AUTHENTICATION_FAILED.message, res, "verifytoken", req.originalUrl);
        }
    }

    verifytokenIfExists(req: ei.Request, res: ei.Response, next: ei.NextFunction) {
        // Check if bearer is undefined
        if(req.headers['authorization']) {
            req.token = req.headers['authorization'];
            // Extract data
            jwt.verify(req.token, config.auth_secret_key, async (err: any, authData: JwtTokenResposne) => {
                if(err) {
                return logErrorAndSendToErrHandler(req, statusCode.TOKEN_AUTHENTICATION_FAILED.code, statusCode.TOKEN_AUTHENTICATION_FAILED.message, res, "verifytoken", req.originalUrl, err);
                }
                req.decoded = authData;
        
                return next();
                });
        } else {
            return next();
        }
    }
}

export default new AuthController();