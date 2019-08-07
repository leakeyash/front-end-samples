"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var job_module_1 = require("./job.module");
describe('JobQueueModule', function () {
    var jobQueueModule;
    beforeEach(function () {
        jobQueueModule = new job_module_1.JobQueueModule();
    });
    it('should create an instance', function () {
        expect(jobQueueModule).toBeTruthy();
    });
});
//# sourceMappingURL=job.module.spec.js.map