import winston, { format } from 'winston';
import moment from 'moment';
import appRoot from 'app-root-path';

const { combine, timestamp, label, printf } = format;

const fileName = `app-${moment().format('YYYY-MM-DD')}`;

const myFormat = printf(info => {
    return `${(new Date()).toISOString()} [${info.label}] ${info.level}: ${info.message}`;
});

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/${fileName}.log`,
        handleExceptions: true,
        json: true,
        timestamp: true
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: combine(
            label({ label: 'logging' }),
            timestamp(),
            myFormat
        ),
    },
};
/**
 * method for write log information about application work on logs folder, using Winston
 */
export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File(options.file)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export class LoggerStream {
    write(message: string) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
}
