import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    // sostituto di BrowserModule. Fornisce accesso a direttive ngIf, ngClass
    CommonModule
  ]
})
export class SharedModule { }
