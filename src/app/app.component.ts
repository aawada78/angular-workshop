import { NgForm, FormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Workshop';

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
