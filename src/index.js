"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const logger = require("winston");
const app_1 = require("./app");
const port = app_1.app.get('port');
const server = app_1.app.listen(port);
process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason));
server.on('listening', () => logger.info('Feathers application started on %s:%d', app_1.app.get('host'), port));
//# sourceMappingURL=index.js.map