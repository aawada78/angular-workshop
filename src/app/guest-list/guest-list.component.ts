import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  @Input() guestList: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
