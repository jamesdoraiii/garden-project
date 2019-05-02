import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { AdminproductspageComponent } from './adminproductspage/adminproductspage.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductsService } from './products.service';
import { LoginService } from './login.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    ProductspageComponent,
    AdminloginpageComponent,
    AdminproductspageComponent,
    DisplayproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, LoginService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
