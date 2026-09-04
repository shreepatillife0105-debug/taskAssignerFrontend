import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTaskComponent } from './components/assing-task/assign-task/assign-task.component';
import { TaskListComponent } from './components/task-list/task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'assign', pathMatch: 'full' },
  { path: 'assign', component: AssignTaskComponent },
  { path: 'tasks', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
