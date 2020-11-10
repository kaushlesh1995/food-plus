import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { ResponsiveService } from './shared/service/app-service/responsive.service';
import { SwiperOptions } from 'swiper'
import { Route } from '@angular/compiler/src/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'food-plus';
  componentType = '';
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private responsiveService:ResponsiveService
             
    ){
  }

 
  ngOnInit(){
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected')
      }
      else{
        console.log('Desktop detected')
      }
    });
    this.onResize();    
  }

  onResize(){
    this.responsiveService.checkWidth();
  }

  openSidenav(type: string) {
    this.componentType = type;
    if(type == 'forgot' || type == 'create' || type == 'contact' ) {
      this.sidenav.close();
      setTimeout(()=>{
        this.sidenav.open()
      },);
    } else {
      this.sidenav.open()
    }
    
  }
  closeSidenav() {
    this.sidenav.close(); 
  }


}
