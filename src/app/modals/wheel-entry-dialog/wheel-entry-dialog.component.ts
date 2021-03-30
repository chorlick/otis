import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WheelEntryRefComponent } from '../wheel-entry-ref/wheel-entry-ref.component'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { WheelEntry } from '../../models/wheel-entry.model'
import * as moment from 'moment';

@Component({
  selector: 'app-wheel-entry-dialog',
  templateUrl: './wheel-entry-dialog.component.html',
  styleUrls: ['./wheel-entry-dialog.component.css']
})
export class WheelEntryDialogComponent implements OnInit {

  wheelEntry: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WheelEntryDialogComponent>) {
    this.wheelEntry = fb.group({

      symbol: ['', Validators.required],
      action: ['', Validators.required],
      date: [moment(), Validators.required],
      numContracts: [0, Validators.required],
      premium: [0, Validators.required],
      status: ['', Validators.required],
      totalRecv: [0, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.wheelEntry.value);
  }

  close() {
    this.dialogRef.close();
  }

}
