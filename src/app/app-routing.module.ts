import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecarogelComponent } from './feature/home/home/components/homecarogel/homecarogel.component';
import { OurmenuComponent } from './feature/home/home/components/ourmenu/ourmenu.component';
import { WebbarComponent } from './shared/components/webbar/webbar.component';

const routes: Routes = [
  {path : "" , component: HomecarogelComponent},
  {path : "our-menu" , component: OurmenuComponent},
  {path : "webbar" , component : WebbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
