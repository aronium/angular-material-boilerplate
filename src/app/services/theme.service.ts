import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  themes: Array<any> = [
    { value: 'default', name: 'Default', cssClass: null },
    { value: 'light', name: 'Light', cssClass: 'light-theme' },
    { value: 'snow-white', name: 'Snow white', cssClass: 'snow-white-theme' },
    { value: 'mixed', name: 'Mixed', cssClass: 'mixed-theme' },
    { value: 'Dark', name: 'Dark', cssClass: 'dark-theme' },
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

    // Set toolbar width
    let fullWidthSaved = localStorage.getItem('fullWidth');
    if(fullWidthSaved){
      this.setFullWidth(JSON.parse(fullWidthSaved));
    }
  }

  /**
  * Gets current theme.
  */
  currentTheme(){
    let storedTheme = localStorage.getItem('theme');

    if(storedTheme != null){
        let tempTheme = JSON.parse(storedTheme);
        let theme = this.themes.filter(theme => theme.value && theme.value === tempTheme.value);

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

  isFullWidth(): boolean{
    let fullWidthSaved = localStorage.getItem('fullWidth');
    if(fullWidthSaved){
      return JSON.parse(fullWidthSaved) as boolean;
    }
    else{
      let body = document.getElementsByTagName('body')[0]; 
      return body.classList.contains('full-width');   
    }
  }

  /**
   * Sets toolbar full width options.
   * 
   * @param fullWidth Indicates whether toolbar is displayed in full width.
   */
  setFullWidth(fullWidth: boolean){
    let body = document.getElementsByTagName('body')[0];
    localStorage.setItem('fullWidth', JSON.stringify(fullWidth));

    if(fullWidth){
      body.classList.add('full-width');
    }
    else{
      body.classList.remove('full-width');
    }
  }
}
