const createService = require('feathers-sequelize');
import { hooks } from './results.hooks';
import { filters } from './results.filters';
import Result from '../../models/Result';

export function results() {
  const app = this;
  const paginate = app.get('paginate');
  const Result = app.get('sequelizeClient')._['Result'];

  const options = {
    name: 'result',
    Model: Result,
    paginate
  };

  const resultService = createService(options);

  // Initialize our service with any options it requires
  app.use('/result', resultService);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('result');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
}