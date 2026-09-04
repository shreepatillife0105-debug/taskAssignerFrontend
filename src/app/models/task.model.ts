import { Intern } from './intern.model';

export interface Task {
  id?: number;
  title: string;
  description: string;
  status?: string;
  assignedAt?: string;
  assignedTo?: Intern;
}

export interface TaskRequest {
  title: string;
  description: string;
  internId: number;
}