import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/filter';

import { ThemeService } from '../../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  providers: [ ThemeService ]
})
export class SettingsComponent {

  themes: Array<any> = [];

  selectedTheme: any;
  isFullWidth: boolean = true;

  constructor(private themeService: ThemeService, private snackBar: MatSnackBar) {
    this.themes = themeService.themes;
    this.selectedTheme = themeService.currentTheme();

    this.isFullWidth = themeService.isFullWidth();
  }

  onThemeSelected(theme: any){
    this.themeService.setTheme(theme);

    this.snackBar.open(`Theme changed to "${theme.name}"`, null, {
      duration: 3000
    });
  }

  setFullWidth(isFullWidth: boolean){
    this.themeService.setFullWidth(isFullWidth);
  }
}
