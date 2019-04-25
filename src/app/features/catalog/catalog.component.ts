import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modules-catalog',
  template: `
   <modules-catalog-form></modules-catalog-form>
   <modules-catalog-list></modules-catalog-list>
  `,
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
