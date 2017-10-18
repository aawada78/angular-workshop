import { Component, Input, OnInit } from '@angular/core';
import { GuestBookService } from '../services/guest-book.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  constructor(private guestBookService: GuestBookService) { }

  ngOnInit() {
  }
}
