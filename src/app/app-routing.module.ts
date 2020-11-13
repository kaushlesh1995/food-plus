import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoOrderComponent } from './feature/cart/components/no-order/no-order.component';
import { OrderManagementComponent } from './feature/cart/components/order-management/order-management.component';
import { OrderlistComponent } from './feature/cart/components/orderlist/orderlist.component';
import { HomecarogelComponent } from './feature/home/home/components/homecarogel/homecarogel.component';
import { OurmenuComponent } from './feature/home/home/components/ourmenu/ourmenu.component';
import { WebbarComponent } from './shared/components/webbar/webbar.component';

const routes: Routes = [
  {path : "" , component: HomecarogelComponent},
  {path : "orders" , component: OrderManagementComponent},
  {path : "webbar" , component : WebbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
