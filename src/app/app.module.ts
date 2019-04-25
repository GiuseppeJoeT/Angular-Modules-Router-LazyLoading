import { CatalogModule } from './features/catalog/catalog.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { ContactsModule } from './features/contacts/contacts.module';

@NgModule({
  declarations: [
    // componenti, direttive e pipe custom
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CatalogModule,
    LoginModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
