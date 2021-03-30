import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelEntryRefComponent } from './wheel-entry-ref.component';

describe('WheelEntryRefComponent', () => {
  let component: WheelEntryRefComponent;
  let fixture: ComponentFixture<WheelEntryRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelEntryRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelEntryRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
