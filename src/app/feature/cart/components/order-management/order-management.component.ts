import { Component, OnInit } from '@angular/core';
import { CratService } from '../../service/crat.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {

  orderList = [];
  constructor(private cratService:CratService) { }
 
  ngOnInit(): void {
    this.addCountProduct();
  }

  addCountProduct(){
    this.cratService.addProductSubject.subscribe((data)=>{
      this.orderList.push(data);
      console.log(data);
      console.log(this.orderList);
    })
  }

}
