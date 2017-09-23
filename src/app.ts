import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as cors from 'cors';
import * as feathers from 'feathers';
import * as configuration from 'feathers-configuration';
import * as handler from 'feathers-errors/handler';
import * as notFound from 'feathers-errors/not-found';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest';
import * as socketio from 'feathers-socketio';
import * as helmet from 'helmet';
import { join, resolve } from 'path';

import { appHooks } from './app.hooks';
import middleware from './middleware';
import sequelize from './sequelize';
import services from './services';


export const app = feathers();

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', feathers.static(join(__dirname, '../dist')));

// Set up Plugins and providers
app.configure(hooks());
app.configure(sequelize);
app.configure(rest());
app.configure(socketio());

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

