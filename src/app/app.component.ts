import { Component } from '@angular/core';

@Component({
  selector: 'modules-root',
  template: `
    <nav>Navigation bar</nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-modules-LazyLoading';
}
