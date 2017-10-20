import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  themes: Array<any> = [
    { value: 'default', name: 'Default', cssClass: null },
    { value: 'light', name: 'Light', cssClass: 'light-theme' },
    { value: 'snow-white', name: 'Snow white', cssClass: 'snow-white-theme' },
    { value: 'mixed', name: 'Mixed', cssClass: 'mixed-theme' },
    { value: 'black', name: 'Black', cssClass: 'black-theme' }
  ];

  /**
  * Loads saved theme and sets required classes to body element.
  */
  loadSavedTheme(){
    let theme = localStorage.getItem('theme');
    if(theme !== undefined){
      let selectedTheme = JSON.parse(theme);
      if(selectedTheme != null && selectedTheme.cssClass){
        let body = document.getElementsByTagName('body')[0];
        body.classList.add(selectedTheme.cssClass);
      }
    }
  }

  /**
  * Gets current theme.
  */
  currentTheme(){
    let storedTheme = localStorage.getItem('theme')

    if(storedTheme != null){
        let tempTheme = JSON.parse(storedTheme);
        let theme = this.themes.filter(theme => theme.value && theme.value === tempTheme.value)

        if(theme != null)
          return theme[0];
    }

    return this.themes[0];
  }

  /**
  * Sets theme.
  *
  * @param theme Theme to use.
  */
  setTheme(theme: any){
    let body = document.getElementsByTagName('body')[0];
    this.themes.forEach(theme => body.classList.remove(theme.cssClass));
    localStorage.removeItem('theme');

    if(theme.cssClass){
      localStorage.setItem('theme', JSON.stringify(theme));
      body.classList.add(theme.cssClass);
    }
  }
}
