import pino from "pino";

const logger = pino({
    base: { author: "itstillon" },
    formatters:{
        level: (label: string) => ({ label })
    }
});

logger.on('level-change', (lvl: string, val: number, prevLvl: string, prevVal: number) => {
    if (logger !== this) {
        console.log("Child logger");
        return;
    }

    console.log('%s (%d) was changed to %s (%d)', prevLvl, prevVal, lvl, val)
});

export default logger;