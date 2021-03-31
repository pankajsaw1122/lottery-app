import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showWheelComp = false;

  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {

    const dialogRef = this.dialog.open(MatDialogComponent, {
      // disableClose: true,
      width: '460px',
      height: '460px',
      data: { confirmMessage: 'Ist prize', timeOut: 30 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result === true) {  
        this.apiService.afterDialogBox({id: 1});
        // this.apiService.onDialogEvent.emit({id: 1});
        this.showWheelComp = true;
      
      }
    });

  }

}
