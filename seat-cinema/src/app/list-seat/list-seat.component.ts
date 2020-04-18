import { SeatComponent } from './../seat/seat.component';
import { Seat } from './../seat/seat.model';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'app-list-seat',
  templateUrl: './list-seat.component.html',
  styleUrls: ['./list-seat.component.css']
})
export class ListSeatComponent implements OnInit {
  seats: Array<Seat>;
  checkedseats: any[] = []

  constructor() {
    this.seats = this.getAllSeat();
  }
  ngOnInit(): void {

  }
  getAllSeat(): any[] {

    var list = []
    for (let index = 1; index < 32; index++) {

      var obj = new Seat(`Thinh ${index} `, index, index % 2 ? 150000 : 100000, index % 6 == 0 ? true : false);

      list.push(obj)

    }
    return list;
  }

  bookSeat(seat: any) {
    if (seat.CheckedSeat) {
      this.checkedseats.push(seat);
    } else {

      for (let index = 0; index < this.checkedseats.length; index++) {
        let obj: any = this.checkedseats[index];

        if (obj.NumberSeat === seat.NumberSeat) this.checkedseats.splice(index, 1);

      }
    }
  }
  @ViewChildren(SeatComponent) tagSeat: QueryList<SeatComponent>;

  cancelSeat(numberSeat: number) {

    for (let index = 0; index < this.checkedseats.length; index++) {

      let obj: any = this.checkedseats[index];

      if (obj.NumberSeat === numberSeat) this.checkedseats.splice(index, 1);

    }
    this.tagSeat.forEach((obj: SeatComponent) => {

      if (obj.seat.NumberSeat === numberSeat) obj.checkedSeat = false;
    });
  }

}
