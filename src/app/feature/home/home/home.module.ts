import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecarogelComponent } from './components/homecarogel/homecarogel.component';
import { OurmenuComponent } from './components/ourmenu/ourmenu.component';


@NgModule({
  declarations: [ HomecarogelComponent, OurmenuComponent],
  imports: [
    CommonModule 
  ]
})
export class HomeModule { }
