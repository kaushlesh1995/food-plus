import { EventEmitter, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output('close') close: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openLoginSidenav(){
     this.close.emit("contact")
  }

}
