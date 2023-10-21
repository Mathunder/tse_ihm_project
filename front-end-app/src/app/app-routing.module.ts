import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'catalogue', component: ProductsListComponent},
  { path: 'vendeurs', component: UsersListComponent},
  { path: 'mescommandes', component: OrdersListComponent},
  { path: 'contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
