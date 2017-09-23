import { jobs } from './jobs/jobs.service';
import { results } from './results/results.service';

export default function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(jobs);
  app.configure(results);
}
