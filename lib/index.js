"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)({
    base: { author: "itstillon" },
    formatters: {
        level: (label) => ({ label })
    }
});
logger.on('level-change', (lvl, val, prevLvl, prevVal) => {
    if (logger !== this) {
        console.log("Child logger");
        return;
    }
    console.log('%s (%d) was changed to %s (%d)', prevLvl, prevVal, lvl, val);
});
exports.default = logger;
//# sourceMappingURL=index.js.map