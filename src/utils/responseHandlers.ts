// Dependencies
import {logExceptions, logtraces} from './logger';
import {gzip} from 'node-gzip';
import * as ei from "./../typescript_helpers/interfaces/express";

// const Sentry = require('@sentry/node');
// Sentry.init({ dsn: 'https://6703629013b9410eb018507bfe3c2fcd@sentry.io/1527946' });

export async function errHandler(code: number, message: string, req: ei.Request, res: ei.Response, error ?: any): Promise<void> {
    try {
        if(error) {
            logExceptions(error);
            if(typeof error === "object") error = JSON.stringify(error);
            // if(process.env.NODE_ENV === "production") Sentry.captureException( {success: false, error,message, code} );
        }

        if(!req) logtraces("req object not passed", __filename, "errHandler");

        if(req && req.headers && req.headers["accept-encoding"] == "gzip") {
            res.set({ 'Content-Encoding': 'gzip'});
            res.status(code).send(await gzip(JSON.stringify({success: false, message, code})));
        }
        else res.status(code).json({success: false, message, code});
    }
    catch(err) {
        res.status(code).json({success: false, message, code});
        console.log("getting error while zipping", err);
        logtraces( err, __filename, "successHandler", req.originalUrl);
    }
}

export  async function successHandler(message: string, data: any, req: ei.Request, res: ei.Response): Promise<void> {
    try {
        if(req && req.headers && req.headers["accept-encoding"] == "gzip") {
            res.set({ 'Content-Encoding': 'gzip'});
            res.status(200).send(await gzip(JSON.stringify({success: true, code: 200, message, data})));
        }
        else {
            res.status(200).json({success: true, code: 200, message, data});
        }
    }
    catch(err) {
        res.status(200).json({success: true, code: 200, message, data});
        console.log("getting error while zipping", err);
        logtraces( err, __filename, "successHandler", req.originalUrl);
    }
}

export function logErrorAndSendToErrHandler(req: ei.Request, code: number, message: string, res: ei.Response, functionName ?: string | undefined, apiName ?: string | undefined, error ?: any): void {
    if(error && typeof error === "string") message = error;
    errHandler(code, message, req, res, error);
    logtraces({code, message}, __filename, functionName, apiName);
}