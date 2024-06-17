import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  tasks: any[] = [];
  projects: string[] = ['Project A', 'Project B', 'Project C']; 
  newTask: any = { project: '' }; 
  editingIndex: number = -1;
  isAnyInputFocused: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.isFormValid()) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { project: '' }; 
    }
  }

  isFormValid(): boolean {
    return !!this.newTask.name && !!this.newTask.priority && !!this.newTask.dueDate && !!this.newTask.project;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  editTask(index: number): void {
    this.editingIndex = index;
  }

  saveTask(index: number): void {
    this.editingIndex = -1; 
  }

  setInputFocus(value: boolean): void {
    this.isAnyInputFocused = value;
  }
}
