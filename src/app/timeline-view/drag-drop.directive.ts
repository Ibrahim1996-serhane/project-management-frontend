import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @Output() dragStart = new EventEmitter<DragEvent>();
  @Output() drop = new EventEmitter<DragEvent>();
  
  @HostListener('dragstart', ['$event']) onDragStart(event: DragEvent): void {
    this.dragStart.emit(event);
  }

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent): void {
    event.preventDefault();
    this.drop.emit(event);
  }
}
