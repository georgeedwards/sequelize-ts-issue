"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createService = require('feathers-sequelize');
const results_hooks_1 = require("./results.hooks");
const results_filters_1 = require("./results.filters");
function results() {
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
    service.hooks(results_hooks_1.hooks);
    if (service.filter) {
        service.filter(results_filters_1.filters);
    }
}
exports.results = results;
//# sourceMappingURL=results.service.js.map