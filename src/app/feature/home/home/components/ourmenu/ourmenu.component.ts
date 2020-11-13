import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CratService } from 'src/app/feature/cart/service/crat.service';
import { SidenavService } from 'src/app/shared/service/app-service/sidenav.service';
import { TakeawayConfirmationComponent } from '../takeaway-confirmation/takeaway-confirmation.component';

@Component({
  selector: 'app-ourmenu',
  templateUrl: './ourmenu.component.html',
  styleUrls: ['./ourmenu.component.scss']
})
export class OurmenuComponent implements OnInit {
// Array of object for OurMenu Code HTML Here

public ourMenuArray = [{
  "img": "https://biryaniblues.com/assets/uploads/product_images/5_chicken_biryani_combo_for_1_sku_5.jpg",
  "title" :" Chkn Biryani Serv1 with Shammi Kebab 2pc",
  "data": "Chicken Biryani (serves 1) + Chicken Shammi kabab (2pcs) + Raita",
  "money" : "329.00"},

  {"img": "https://biryaniblues.com/assets/uploads/product_images/2_chicken_biryani_combo_with_chicken_65_serves_1.jpg",
  "title" :"Chicken Biryani Serv1 + Chicken 65(1/2)",
  "data": "Chicken Biryani (Serves 1) + Fiery Chicken 65 (Small) served with Raita",
  "money" : "389.00"},
  
  {"img": "https://biryaniblues.com/assets/uploads/product_images/Paneer_Biryani_Fiery_Paneer_65_Combo.jpg",
  "title" :" Paneer Biryani (Serv1) + Paneer 65 (1/2)",
  "data": "Paneer Biryani (serves 1) + Fiery Paneer 65 (small) + Raita",
  "money" : "359.00"},
  
  {"img": "https://biryaniblues.com/assets/uploads/product_images/1_veg_biryani_combo_meal.jpg",
  "title" :"Veg Biryani (Serv 1) + Paneer 65 (1/2)",
  "data": "Veg Biryani (serves 1) + Fiery Paneer 65 (small) + Raita",
  "money" : "329.00"},

  {"img": "https://biryaniblues.com/assets/uploads/product_images/Veg_Biryani_Fiery_Potato_65_Combo.jpg",
  "title" :"Veg Biryani (Serv 1) + Aloo 65 (1/2)",
  "data": "Veg Biryani (serves 1) + Fiery Potato 65 (Small) + Raita",
  "money" : "229.00"},

  {"img": "https://biryaniblues.com/assets/uploads/product_images/5_chicken_biryani_combo_for_1_sku_5.jpg",
  "title" :" Chkn Biryani Serv1 with Shammi Kebab 2pc",
  "data": "Chicken Biryani (serves 1) + Chicken Shammi kabab (2pcs) + Raita",
  "money" : "329.00"},

  {"img": "https://biryaniblues.com/assets/uploads/product_images/5_chicken_biryani_combo_for_1_sku_5.jpg",
  "title" :" Chkn Biryani Serv1 with Shammi Kebab 2pc",
  "data": "Chicken Biryani (serves 1) + Chicken Shammi kabab (2pcs) + Raita",
  "money" : "329.00"},
]
@ViewChild('vegButton') vegButton:ElementRef;
private takeAwayRef: MatDialogRef<TakeawayConfirmationComponent>;

  constructor(private dialog: MatDialog,
              private sidenaveService : SidenavService,
              private  addOrderservice : CratService
    ) { }

  ngOnInit(): void {
  }

  vegButtonChange(){
    let classList = this.vegButton.nativeElement.classList;
    if(classList.contains('veg-only'))  {
          classList.remove('veg-only')
    } else {
        classList.add('veg-only')
    }
    }

    openDialog(){
     this.takeAwayRef = this.dialog.open(TakeawayConfirmationComponent)
     this.takeAwayRef.componentInstance.status.subscribe((data) => {
        if(data == 'open') {
           this.sidenaveService.notyfier.next("takeway");
        }
     });
    }

    addProduct(){
     this.addOrderservice.addProductSubject.next('add');
    }

}
