import pino from "pino";

const logger = pino({
    base: { author: "itstillon" },
    formatters:{
        level: label => ({ label })
    }
});

export default logger;