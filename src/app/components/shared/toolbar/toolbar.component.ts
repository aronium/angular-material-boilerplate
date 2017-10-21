import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent{

  @Input()
  header: string;

  @Output()
  toggleMenu = new EventEmitter();

  constructor(){ }

  /**
  * Dispatch toggleMenu event.
  */
  onToggleMenu(){
    this.toggleMenu.emit();
  }
}
