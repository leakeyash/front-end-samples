import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobQueueComponent } from '../../Components/job-queue/job-queue.component';
import { PrimengModule } from '../primeng/primeng.module';
@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [JobQueueComponent]
})
export class JobQueueModule { }
