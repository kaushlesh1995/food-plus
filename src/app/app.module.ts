import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { HomeModule } from './feature/home/home/home.module';
import { HomeRoutingModule } from './feature/home/home/home.routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { DeliveryLocationComponent } from './shared/components/delivery-location/delivery-location.component';
import { CreateComponent } from './shared/components/create/create.component';
import { LoginComponent } from './shared/components/login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './shared/components/forgot/forgot.component';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import { TakeawayConfirmationComponent } from './feature/home/home/components/takeaway-confirmation/takeaway-confirmation.component';
import { TakewayLocationComponent } from './feature/home/home/components/takeway-location/takeway-location.component';
import { CartModule } from './feature/cart/cart.module';
import { CartRoutingModule } from './feature/cart/cart.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DeliveryLocationComponent,
    CreateComponent,
    LoginComponent,
    ForgotComponent,
    TakeawayConfirmationComponent,
    TakewayLocationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    HomeModule,
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartModule,
    CartRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
