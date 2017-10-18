import { Component } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  themes = [
    { value: 'default', name: 'Default', cssClass: null },
    { value: 'light', name: 'Light', cssClass: 'light-theme' },
    { value: 'white-snow', name: 'White snow', cssClass: 'white-snow-theme' },
    { value: 'mixed', name: 'Mixed', cssClass: 'mixed-theme' },
    { value: 'black', name: 'Black', cssClass: 'black-theme' }
  ];

  selectedTheme: any;

  constructor() {
    let storedThemeJSON = localStorage.getItem('theme');

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

      console.log(this.selectedTheme);

      // for(let theme of this.themes){
      //   if(theme.value == storedTheme.value){
      //     this.selectedTheme = theme;
      //     break;
      //   }
      // }
    }
  }

  onThemeSelected(theme: any){
    let body = document.getElementsByTagName('body')[0];

    this.themes.forEach(theme => body.classList.remove(theme.cssClass));
    localStorage.removeItem('theme');

    if(theme.cssClass){
      localStorage.setItem('theme', JSON.stringify(theme));
      body.classList.add(theme.cssClass);
    }
  }
}
