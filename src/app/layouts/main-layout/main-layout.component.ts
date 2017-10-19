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

  private getSidenavState(): boolean {
    let savedState = localStorage.getItem("sidenavOpen");

    if (savedState) {
      return JSON.parse(savedState);
    }

    return true;
  }

  private checkSidenavMode() {
    if (window.innerWidth < 768) {
      this.sidenavMode = 'over';
      this.isSidenavOpen = false;

      this.sidenav.close();
    }
    else {
      this.sidenavMode = 'side';
      this.isSidenavOpen = this.getSidenavState();
      if (this.isSidenavOpen)
        this.sidenav.open();
    }
  }

  private subscribeToRouteChangeEvent() {
    // Hide sidenav on route change if using 'over' mode
    this.navigationSubscription = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        if (this.sidenav.mode === 'over')
          this.sidenav.close();
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkSidenavMode();
  }

  ngOnInit() {
    this.subscribeToRouteChangeEvent();
    this.checkSidenavMode();
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

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
