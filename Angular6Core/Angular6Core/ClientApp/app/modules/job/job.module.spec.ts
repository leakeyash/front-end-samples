import { JobQueueModule } from './job.module';

describe('JobQueueModule', () => {
  let jobQueueModule: JobQueueModule;

  beforeEach(() => {
    jobQueueModule = new JobQueueModule();
  });

  it('should create an instance', () => {
    expect(jobQueueModule).toBeTruthy();
  });
});
