import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails: any = {
    owner: 'John Doe',
    startDate: '2024-06-01',
    deadline: '2024-06-30'
  };

  isEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  updateProjectDetails(): void {
    console.log('Project details updated:', this.projectDetails);
    this.toggleEditMode();
  }
}
