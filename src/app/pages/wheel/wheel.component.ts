import { Component, Inject, OnInit } from '@angular/core';
import { WheelEntry } from './../../models/wheel-entry.model'
import { WheelEntryDialogComponent } from '../../modals/wheel-entry-dialog/wheel-entry-dialog.component'
import { WheelEntryRefComponent } from '../../modals/wheel-entry-ref/wheel-entry-ref.component'
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


const ELEMENT_DATA: WheelEntry[] = [
  { symbol: "aapl", action: 'CSP', date: new Date(), numContracts: 1, premium: 4.3, status: "open", totalRecv: 3493 },
  { symbol: "aapl", action: 'CSP', date: new Date(), numContracts: 1, premium: 4.3, status: "open", totalRecv: 3493 },
];

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {
  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  tableColumns: string[] = ['symbol', 'action', 'date', 'numContracts', 'premium', 'status', 'totalRecv'];
  tabaleData = ELEMENT_DATA;
  createNewEntry() {
    const dialogConfig = new MatDialogConfig(
      
      
    );
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;    

    const dialogRef = this.dialog.open(WheelEntryDialogComponent, dialogConfig);
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        console.log(result)
        this.tabaleData.push(result)
    });
    
  }
}
