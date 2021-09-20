// "use strict";

// Dependencies
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
require('dotenv').config();

// Requiremets
import config from "./config/config";
import {logExceptions} from "./utils/logger";
import {LoggerStream} from './config/winston';

// Routes
import v1 from "./routes/v1/index";

const app = express();

// Middlewares
app.use(morgan("combined", { stream: new LoggerStream() })); // Morgan is used for logging the API Requests
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet()); //Helmet helps you secure your Express apps by setting various HTTP headers(contentSecurityPolicy,xssFilter,referrerPolicy etc).

process.on("uncaughtException", e => {
    logExceptions(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    logExceptions(e);
    process.exit(1);
});

app.use('/api/v1', v1);

app.listen(config.port, () => console.log("app is running on ", config.port));
