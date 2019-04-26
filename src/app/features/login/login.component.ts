import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modules-login',
  template: `
    <p>
      login works!
    </p>

    <modules-alert>ATTENZIONE</modules-alert>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
