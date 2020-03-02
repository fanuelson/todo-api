const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const formatCustom = (info) => `${info.timestamp} ${info.level} :: ${info.message}`;

const formatter = printf(formatCustom);

const logger = createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: combine( colorize({level: true}), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), formatter ),
    transports: [new transports.Console()]
});

module.exports.info = (error) => { logger.info(error); };
module.exports.error = (error) => { 
    if(error.isBusinessError) {
        logger.error(JSON.stringify(error))
    }else{
        logger.error(error); 
    }

};
module.exports.debug = (error) => { logger.debug(error); };