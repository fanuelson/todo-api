
import express from 'express';
import helmet from 'helmet';

import logger from "@core/utils/logger";
import errorHandler from '@core/error/error-handler';
import components from '@components';
import asyncMiddleware from '@core/utils/asyncMiddleware';

const SERVER_PORT = process.env.PORT || 3000;
logger.info(`Starting application env=${process.env.NODE_ENV}`);

// import sequelize from './db-config/sequelizeInstance';

const app = express();

//Security
app.use(helmet());

// Loading routes and middlewares (interceptors and handlers)
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/api', components);

app.use((err, req, res, next) => {
    const isBusinessError = errorHandler.handleError(err);

    res.status(err.httpStatus || 500);
    if (isBusinessError) {
        res.send(err);
    } else {
        res.send("Internal Server Error")
    }
    next(err);
});

// Bootstraping application
app.listen(SERVER_PORT, () => {
    logger.info(`Server is now running on port ${SERVER_PORT}`);
}).on("error", logger.error);

module.exports = app;