import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecarogelComponent } from './components/homecarogel/homecarogel.component';
import { OurmenuComponent } from './components/ourmenu/ourmenu.component';

const routes: Routes = [
  {path : "carousel" , component: HomecarogelComponent},
  {path : "" , component: OurmenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }