import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelEntryDialogComponent } from './wheel-entry-dialog.component';

describe('WheelEntryDialogComponent', () => {
  let component: WheelEntryDialogComponent;
  let fixture: ComponentFixture<WheelEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelEntryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
