import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-wheel-entry-ref',
  templateUrl: './wheel-entry-ref.component.html',
  styleUrls: ['./wheel-entry-ref.component.css']
})
export class WheelEntryRefComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
