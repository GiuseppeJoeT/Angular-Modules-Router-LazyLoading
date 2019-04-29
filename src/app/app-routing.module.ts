import { LoginComponent } from './features/login/login.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
