import { Route } from '@angular/compiler/src/core';
import { EventEmitter, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CratService } from 'src/app/feature/cart/service/crat.service';
import { SidenavService } from '../../service/app-service/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output('close') close: EventEmitter<String> = new EventEmitter();
  public count = 0

  constructor(private sidenavService:SidenavService,
    private  addOrderservice : CratService,
    private route : Router
    ) { }

  ngOnInit(): void {
    this.addProduct();
    this.addCount();
    
    
  }

  openLoginSidenav(){
     this.close.emit("contact")
  }

  addProduct(){
    this.addOrderservice.addProductSubject.subscribe((data)=>{
     
      if(data == 'add') {
        this.count = this.count + 1;
       }      
    })
  }

  addCount(){
    this.addOrderservice.addProductSubject.next('')
  }
  

}
