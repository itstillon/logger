declare const logger: import("pino").Logger<{
    base: {
        author: string;
    };
    formatters: {
        level: (label: string) => {
            label: string;
        };
    };
}>;
export default logger;
//# sourceMappingURL=index.d.ts.map