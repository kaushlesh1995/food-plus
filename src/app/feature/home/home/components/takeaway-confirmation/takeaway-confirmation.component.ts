import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-takeaway-confirmation',
  templateUrl: './takeaway-confirmation.component.html',
  styleUrls: ['./takeaway-confirmation.component.scss']
})
export class TakeawayConfirmationComponent implements OnInit {

  status: EventEmitter<String> = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<TakeawayConfirmationComponent>) { }


  ngOnInit(): void {
  }
  openSidenav() {
    this.dialogRef.close();
    this.status.emit("open");
  }
  cancel() {
    this.dialogRef.close();
  }

}
