import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecarogelComponent } from './components/homecarogel/homecarogel.component';
import { OurmenuComponent } from './components/ourmenu/ourmenu.component';

import { SharedModule } from './../../../shared/shared.module';

@NgModule({
  declarations: [ HomecarogelComponent, OurmenuComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule
  ]
})
export class HomeModule { }
