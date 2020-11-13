import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoOrderComponent } from './components/no-order/no-order.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';



@NgModule({
  declarations: [OrderManagementComponent, NoOrderComponent, OrderlistComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NoOrderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CartModule { }
