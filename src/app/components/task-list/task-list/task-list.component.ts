import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskserviceService } from 'src/app/service/taskservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];
  selectedDate: string = '';

  constructor(private taskService: TaskserviceService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks(this.selectedDate || undefined).subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error(err)
    });
  }

  onDateChange() {
    this.loadTasks();
  }

  clearFilter() {
    this.selectedDate = '';
    this.loadTasks();
  }
}
