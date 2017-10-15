import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { MatSidenav } from '@angular/material';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav:MatSidenav;
  
  sideNavMode: string;
  isSideNavOpen: boolean = false;

  constructor(private router: Router) { }

  private isLargeScreen() {
    return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 720;
  }

  ngOnInit() {
    let isLargeScreen = this.isLargeScreen();
    this.sideNavMode = isLargeScreen ? 'side' : 'over';
    this.isSideNavOpen = isLargeScreen;

    // On mobile view, hide sidenav on route change
    if (!isLargeScreen) {
      this.router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe((event: NavigationStart) => {
          this.sidenav.close();
        });
    }
  }
}
