import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modules-alert',
  template: `
    <div class="alert">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
