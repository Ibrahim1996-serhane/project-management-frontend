import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  startDate: Date;
}

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.css']
})
export class TimelineViewComponent implements OnInit {
  tasks: Task[] = [
    { name: 'Task 1', startDate: new Date('2024-06-09') },
    { name: 'Task 2', startDate: new Date('2024-06-12') },
    { name: 'Task 3', startDate: new Date('2024-06-15') }
  ];

  startDate: Date = new Date('2024-06-09');
  endDate: Date = new Date('2024-06-30');

  timelineDates: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateTimelineDates();
  }

  generateTimelineDates(): void {
    const currentDate = new Date(this.startDate);
    while (currentDate <= this.endDate) {
      this.timelineDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  calculateTaskPosition(startDate: Date): number {
    const diffInDays = Math.floor((startDate.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24));
    return (diffInDays / this.getTotalDays()) * 100;
  }

  getTotalDays(): number {
    return Math.floor((this.endDate.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24));
  }

  onDragStart(event: DragEvent, task: Task): void {
    event.dataTransfer?.setData('text/plain', JSON.stringify(task));
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const droppedTask: Task = JSON.parse(event.dataTransfer?.getData('text/plain') || '{}');
    // Handle drop logic
    console.log('Dropped Task:', droppedTask);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
}
