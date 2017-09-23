"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A hook that logs service method before, after and error
const logger = require("winston");
function logHook(hook) {
    let message = `${hook.type}: ${hook.path} - Method: ${hook.method}`;
    if (hook.type === 'error') {
        message += `: ${hook.error.message}`;
    }
    logger.info(message);
    logger.debug('hook.data', hook.data);
    logger.debug('hook.params', hook.params);
    if (hook.result) {
        logger.debug('hook.result', hook.result);
    }
    if (hook.error) {
        logger.error(hook.error);
    }
}
exports.logHook = logHook;
;
//# sourceMappingURL=logger.js.map