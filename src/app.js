"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compress = require("compression");
const cors = require("cors");
const feathers = require("feathers");
const configuration = require("feathers-configuration");
const handler = require("feathers-errors/handler");
const notFound = require("feathers-errors/not-found");
const hooks = require("feathers-hooks");
const rest = require("feathers-rest");
const socketio = require("feathers-socketio");
const helmet = require("helmet");
const path_1 = require("path");
const app_hooks_1 = require("./app.hooks");
const middleware_1 = require("./middleware");
const sequelize_1 = require("./sequelize");
const services_1 = require("./services");
exports.app = feathers();
// Load app configuration
exports.app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
exports.app.use(cors());
exports.app.use(helmet());
exports.app.use(compress());
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: true }));
// app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
exports.app.use('/', feathers.static(path_1.join(__dirname, '../dist')));
// Set up Plugins and providers
exports.app.configure(hooks());
exports.app.configure(sequelize_1.default);
exports.app.configure(rest());
exports.app.configure(socketio());
// Configure other middleware (see `middleware/index.js`)
exports.app.configure(middleware_1.default);
// Set up our services (see `services/index.js`)
exports.app.configure(services_1.default);
// Configure a middleware for 404s and the error handler
exports.app.use(notFound());
exports.app.use(handler());
exports.app.hooks(app_hooks_1.appHooks);
//# sourceMappingURL=app.js.map