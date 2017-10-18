import { Component } from '@angular/core';
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

  constructor(private themeService: ThemeService) {
    this.themes = themeService.themes;
    this.selectedTheme = themeService.currentTheme();
  }

  onThemeSelected(theme: any){
    this.themeService.setTheme(theme);
  }
}
