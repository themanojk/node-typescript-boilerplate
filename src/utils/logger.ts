import { logger } from "../config/winston";
/*
 * Application error stacks
 */

export function logExceptions(error: any): void {
	console.log("error", error);
	try {
		if(typeof error == "object") error = JSON.stringify(error);
		logger.error(error);
	}
	catch(err) {
		console.log("error in logExceptions function in logger file", err);
		if(typeof err == "object") err = JSON.stringify(err);
	}
}

/*
 * Every function would have some tracing enabled with the function duration, passed parameters and how far you did get in your function.
 * It will be used to trace the logs which contains the values of variables being used in complex processes.
 * Format of the message will be /api/name  |  /dir/name  |  functionName  |  message.
 * Note: if anything is missing will have empty space by default to remove confusion between the dashes(|)
 */
export function logtraces(message: any, dir: string = "", functionName: string = "", api: string = ""): void {
	console.log("trace message", message);
	try {
		if(typeof message === "object") message = JSON.stringify(message);
		message = api + "  |  " + dir + "  |  " + functionName + "  |  " + message;
		logger.info(message);
	}
	catch(err) {
		console.log("error in logtraces function in logger file", err);
		if(typeof err == "object") err = JSON.stringify(err);
	}
}