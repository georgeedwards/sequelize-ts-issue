const createService = require('feathers-sequelize');
import { hooks } from './jobs.hooks';
import { filters } from './jobs.filters';
import Job from '../../models/job';

export function jobs() {
  const app = this;
  const paginate = app.get('paginate');
  const Job = app.get('sequelizeClient')._['Job'];

  const options = {
    name: 'job',
    Model: Job,
    paginate
  };

  const jobService = createService(options);


  // Initialize our service with any options it requires
  app.use('/job', jobService);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('job');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
}
