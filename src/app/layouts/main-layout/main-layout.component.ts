import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {
  
  sideNavMode: string;
  isSideNavOpen: boolean = false;
  
  constructor() { }

  ngOnInit() {
    let isLarge = this.isLargeScreen();
    this.sideNavMode = isLarge ? 'side' : 'over';
    this.isSideNavOpen = isLarge;
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }

}
