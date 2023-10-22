import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { ProductInfosComponent } from './product-infos/product-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    ProductsListComponent,
    UsersListComponent,
    OrdersListComponent,
    ContactFormComponent,
    ProductTemplateComponent,
    UserTemplateComponent,
    ProductInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
