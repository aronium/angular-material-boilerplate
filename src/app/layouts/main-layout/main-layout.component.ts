import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { ISubscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;

  sidenavMode: string;
  isSidenavOpen: boolean = true;
  navigationSubscription: ISubscription;

  constructor(private router: Router) { }

  /**
  * Gets current side nav mode for page refresh, if any.
  * Sidenav mode is stored in localStorage for later use.
  */
  private wasSidenavOpen(): boolean {
    let savedState = localStorage.getItem("sidenavOpen");

    if (savedState) {
      return JSON.parse(savedState);
    }

    return true;
  }

  /**
  * Sets correct sidenav mode based on window size.
  */
  private setSidenavMode() {
    if (window.innerWidth < 768) {
      this.sidenavMode = 'over';
      this.isSidenavOpen = false;

      this.sidenav.close();
    }
    else {
      this.sidenavMode = 'side';
      this.isSidenavOpen = this.wasSidenavOpen();
      if (this.isSidenavOpen)
        this.sidenav.open();
    }
  }

  /**
  * Creates subscription to navigation change event.
  * Used to toggle side menu if one is in "over" mode.
  */
  private subscribeToRouteChangeEvent() {
    // Hide sidenav on route change if using 'over' mode
    this.navigationSubscription = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        if (this.sidenav.mode === 'over')
          this.sidenav.close();
      });
  }

  /**
  * Handes window resilze.
  *
  * @param event Event args.
  */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSidenavMode();
  }

  /**
  * Method executed on component initialization.
  */
  ngOnInit() {
    this.subscribeToRouteChangeEvent();
    this.setSidenavMode();
  }

  /**
  * Method executed on component destroy.
  */
  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  /**
  * Toggles sidenav based on current sidenav settings.
  */
  toggleSidenav() {
    if (this.sidenavMode === 'side') {
      this.sidenav.toggle();
      this.isSidenavOpen = !this.isSidenavOpen;

      // Keep open state for desktops only
      localStorage.setItem("sidenavOpen", JSON.stringify(this.isSidenavOpen));
    }
    else {
      this.sidenav.open();
    }
  }
}
