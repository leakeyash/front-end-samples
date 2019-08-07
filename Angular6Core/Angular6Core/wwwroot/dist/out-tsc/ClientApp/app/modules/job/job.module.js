"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var job_queue_component_1 = require("../../Components/job-queue/job-queue.component");
var primeng_module_1 = require("../primeng/primeng.module");
var JobQueueModule = /** @class */ (function () {
    function JobQueueModule() {
    }
    JobQueueModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                primeng_module_1.PrimengModule
            ],
            declarations: [job_queue_component_1.JobQueueComponent]
        })
    ], JobQueueModule);
    return JobQueueModule;
}());
exports.JobQueueModule = JobQueueModule;
//# sourceMappingURL=job.module.js.map