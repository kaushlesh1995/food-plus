import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delivery-location',
  templateUrl: './delivery-location.component.html',
  styleUrls: ['./delivery-location.component.scss']
})
export class DeliveryLocationComponent implements OnInit {
  @Output('close') close: EventEmitter<String> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeComponent() {
    this.close.emit("close");
  }

}
