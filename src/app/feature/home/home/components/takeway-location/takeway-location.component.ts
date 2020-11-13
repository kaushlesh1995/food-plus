import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-takeway-location',
  templateUrl: './takeway-location.component.html',
  styleUrls: ['./takeway-location.component.scss']
})
export class TakewayLocationComponent implements OnInit {
  @Output('takewayLocation') close: EventEmitter<String> = new EventEmitter();

constructor(){}
  ngOnInit(): void {
    
  }
  closeComponent() {
    this.close.emit("close");
  }

}
