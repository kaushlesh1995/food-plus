import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
  public counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addCounter() {
    this.counter = this.counter + 1;
    console.log(this.counter);
    return this.counter;
  }

  removeCounter(counter) {
    if (this.counter > 0) {
      this.counter = counter - 1;
      console.log(this.counter);
      return this.counter;
    }
  }
}
