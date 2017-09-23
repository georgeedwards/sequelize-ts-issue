"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobs_service_1 = require("./jobs/jobs.service");
const results_service_1 = require("./results/results.service");
function default_1() {
    const app = this; // eslint-disable-line no-unused-vars
    app.configure(jobs_service_1.jobs);
    app.configure(results_service_1.results);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map