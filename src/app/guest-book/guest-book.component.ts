import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {

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

  @ViewChild('form') form: NgForm;

  formModel: any = {
    name: null,
    feedback: null
  };

  constructor() { }

  onSubmit() {
    this.guestList.push({ name: this.formModel.name, feedback: this.formModel.feedback });
    this.form.reset();
  }

  public ngOnInit(): void {
    this.guestList = this.initialGuestList;
  }
}
