import { forEach } from '@angular/router/src/utils/collection';
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

  public addGuest(name: string, feedback: string) {
    this.guestList.push({ name: name, feedback: feedback });
  }

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
}
