import { Injectable } from '@angular/core';
import { Guest } from '../model/guest';

@Injectable()
export class GuestBookService {

  guestList: Array<Guest>;

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

  public inviteStarWarsPeople() {
    const request = new XMLHttpRequest();
    const that = this;
    request.open('GET', 'https://swapi.co/api/people/?page=1');
    request.addEventListener('load', function (event) {
      const people: [any] = JSON.parse(request.responseText).results;
      people.forEach(element => {
        that.guestList.push({ name: element.name, feedback: 'visit me @ ' + element.url });
      });
    });
    request.send();
  }

  constructor() {
    this.guestList = this.initialGuestList;
  }

  public addGuest(name: string, feedback: string) {
    const guest = new Guest();
    guest.name = name;
    guest.feedback = feedback;

    this.guestList.push(guest);
  }
}
