import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {
  activeProjects: any[] = [
    { name: 'Project A', completionPercentage: 80 },
    { name: 'Project B', completionPercentage: 60 },
    { name: 'Project C', completionPercentage: 40 }
  ];
  pendingTasksCount: number = 10;
  completedTasksCount: number = 15;

  constructor() { }

  ngOnInit(): void {
  }
}
