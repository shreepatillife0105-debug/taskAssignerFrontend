import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intern } from '../models/intern.model';
import { Observable } from 'rxjs';
import { Task, TaskRequest } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private baseUrl = 'http://localhost:8080/api';
  // https://taskassignerapplication.onrender.com/api/interns

  constructor(private http: HttpClient) { }

  getInterns(): Observable<Intern[]> {
    return this.http.get<Intern[]>(`${this.baseUrl}/interns`);
  }

  assignTask(task: TaskRequest): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task);
  }

  getAllTasks(date?: string): Observable<Task[]> {
    let url = `${this.baseUrl}/tasks`;
    if (date) {
      url += `?date=${date}`;
    }
    return this.http.get<Task[]>(url);
  }
}
