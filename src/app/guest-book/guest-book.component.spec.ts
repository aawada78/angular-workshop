import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookComponent } from './guest-book.component';

describe('GuestBookComponent', () => {
  let component: GuestBookComponent;
  let fixture: ComponentFixture<GuestBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
