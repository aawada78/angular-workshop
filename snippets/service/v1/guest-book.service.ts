import { Injectable } from '@angular/core';

@Injectable()
export class GuestBookService {

  guestList: Array<any>;

  initialGuestList = [
    {
      name: 'Arnold',
      feedback: 'I will be back!'
    },
    {
      name: 'Bruce',
      feedback: 'Yippie-Ya-Yeah, Schweinebacke!'
    },
    {
      name: 'Rocky',
      feedback: 'Boxen kannst du ja, aber du quatscht zuviel!'
    },
  ];

  constructor() {
    this.guestList = this.initialGuestList;
  }
}
