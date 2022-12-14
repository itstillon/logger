import winston from "winston";

const { combine, errors, timestamp, splat, json } = winston.format;

export const logger = winston.createLogger({

    // default log level is "info"
    level: "info",

    // combining multiple formats to get the desired output
    format: combine(

        // required to log errors thrown by the application; ignored otherwise
        errors({ stack: true }),

        // enables string interpolation of messages
        splat(),

        // adds timestamp to all log messages
        timestamp(),

        // default log format is JSON
        json()
    ),

    transports: [
        
        // logs will be written to console / stdout
        new winston.transports.Console({

            // catch and log `uncaughtException` events from the application
            handleExceptions: true,

            // catch and log `uncaughtRejection` events from the application
            handleRejections: true
        })
    ],

    // generic metadata applied to all logs
    defaultMeta: { type: "application" }
});
