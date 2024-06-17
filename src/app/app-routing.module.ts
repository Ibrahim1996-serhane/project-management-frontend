import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardOverviewComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'task-management', component: TaskManagementComponent },
  { path: 'timeline-view', component: TimelineViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
