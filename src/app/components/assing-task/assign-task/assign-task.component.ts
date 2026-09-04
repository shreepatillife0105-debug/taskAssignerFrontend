import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/models/intern.model';
import { TaskRequest } from 'src/app/models/task.model';
import { TaskserviceService } from 'src/app/service/taskservice.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  interns: Intern[] = [];
  task: TaskRequest = { title: '', description: '', internId: 0 };
  message = '';
  isSuccess = false;

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.loadInterns();
  }

  loadInterns() {
    this.taskService.getInterns().subscribe({
      next: (data: any) => this.interns = data,
      error: (err: any) => console.error(err)
    });
  }

  assignTask() {
    if (!this.task.title || !this.task.description || !this.task.internId) {
      this.message = 'Please fill all fields';
      this.isSuccess = false;
      return;
    }

    this.taskService.assignTask(this.task).subscribe({
      next: () => {
        this.message = 'Task assigned successfully and email sent!';
        this.isSuccess = true;
        this.task = { title: '', description: '', internId: 0 };
      },
      error: (err) => {
        this.message = err.error?.message || err.error || 'Error assigning task';
        this.isSuccess = false;
        console.error(err);
      }
    });
  }

}
