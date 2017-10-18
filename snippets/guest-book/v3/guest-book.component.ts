import { GuestBookService } from '../services/guest-book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent {

  @ViewChild('form') form: NgForm;

  formModel: any = {
    name: null,
    feedback: null
  };

  constructor(private guestBookService: GuestBookService) { }

  onSubmit() {
    this.guestBookService.addGuest(this.formModel.name, this.formModel.feedback);
    this.form.reset();
  }
}
