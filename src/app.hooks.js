"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Application hooks that run for every service
const logger_1 = require("./hooks/logger");
exports.appHooks = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [logger_1.logHook],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    error: {
        all: [logger_1.logHook],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
//# sourceMappingURL=app.hooks.js.map