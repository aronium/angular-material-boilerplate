import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

  private sub: any;
  private defaultTitle: string;

  @Input()
  header: string;

  @Output()
  toggleMenu = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  /**
  * Dispatch toggleMenu event.
  */
  onToggleMenu() {
    this.toggleMenu.emit();
  }

  ngOnInit() {

    this.defaultTitle = this.header;

    // Get initial title on page load
    this.getPageTitle();

    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.getPageTitle();
      });
  }

  private getPageTitle(): void {
    let parentRouteTitle;
    let snapshot = this.route.snapshot;
    let activated = this.route.firstChild;
    if (activated != null) {
      while (activated != null) {
        // Get title for the current route, if case child is missing rote data, use parent title.
        parentRouteTitle = snapshot.data['title'] || parentRouteTitle;

        snapshot = activated.snapshot;
        activated = activated.firstChild;
      }
    }

    // Set header, fallback to default title if data not set on route
    this.header = snapshot.data['title'] || parentRouteTitle || this.defaultTitle;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
