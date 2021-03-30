import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapsComponent } from './leaps.component';

describe('LeapsComponent', () => {
  let component: LeapsComponent;
  let fixture: ComponentFixture<LeapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
