import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardOverviewComponent,
    ProjectDetailsComponent,
    TaskManagementComponent,
    TimelineViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
