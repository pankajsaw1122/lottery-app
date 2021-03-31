import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {
  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;  

  public confirmMessage: string = '';
  public timeOut: number = 0;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    
    // this.countdown.begin();
    this.confirmMessage = this.data.confirmMessage;
      this.timeOut = this.data.timeOut;
  }
  handleEvent(event: any) {
    console.log(event);

    if(event.left === 0) {
      this.dialogRef.close(true);
    }
  }
}
