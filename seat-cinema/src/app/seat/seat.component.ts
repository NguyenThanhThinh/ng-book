import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input() seat: any = {};
  @Input() i: number;
  @Output() eventBookSeat = new EventEmitter();
  checkedSeat: boolean = false;

  // Name: string;
  // NumberSeat: number;
  // Price: number;
  // Status: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  bookSeat() {
    this.checkedSeat = !this.checkedSeat;
    let seat = { NumberSeat: this.seat.NumberSeat, CheckedSeat: this.checkedSeat, Price: this.seat.Price }
    this.eventBookSeat.emit(seat);
  }
  displayColorButton(status) {
    if (status === true) {
      return 'btn btn-danger m-1';
    } else {
      return 'btn btn-secondary m-1';
    }
  }


}
