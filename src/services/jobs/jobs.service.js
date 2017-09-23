"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createService = require('feathers-sequelize');
const jobs_hooks_1 = require("./jobs.hooks");
const jobs_filters_1 = require("./jobs.filters");
function jobs() {
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
    service.hooks(jobs_hooks_1.hooks);
    if (service.filter) {
        service.filter(jobs_filters_1.filters);
    }
}
exports.jobs = jobs;
//# sourceMappingURL=jobs.service.js.map