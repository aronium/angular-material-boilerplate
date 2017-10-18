import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SettingsComponent } from '../../settings/settings.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent{

  @Input()
  header: string;

  @Output()
  toggleMenu = new EventEmitter();

  constructor(private dialog: MatDialog){

  }

  onOpenSettings(){
    this.dialog.open(SettingsComponent);
  }

  onToggleMenu(){
    this.toggleMenu.emit();
  }
}
