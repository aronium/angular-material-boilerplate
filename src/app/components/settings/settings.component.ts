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

    let storedThemeJSON = themeService.currentTheme();

    if(storedThemeJSON == null){
      // If no custom theme is selected, use the first one, "default"
      this.selectedTheme = this.themes[0];
    }
    else{
      // Convert saved theme to JSON object and find the matching theme
      let storedTheme = JSON.parse(storedThemeJSON);
      let theme = this.themes.filter(theme => theme.value && theme.value === storedTheme.value);

      if(theme != null){
        this.selectedTheme = theme[0];
      }
      else{
        this.selectedTheme = this.themes[0];
      }
    }
  }

  onThemeSelected(theme: any){
    this.themeService.setTheme(theme);
  }
}
