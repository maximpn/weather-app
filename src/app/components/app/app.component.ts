import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'wa-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loading$ = this.router.events.pipe(
    filter(e => e instanceof NavigationStart ||  e instanceof NavigationEnd),
    map(e => e instanceof NavigationStart),
  );

  constructor(private readonly router: Router) {}
}
