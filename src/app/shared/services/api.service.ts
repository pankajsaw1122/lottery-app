import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  // onDialogEvent = new EventEmitter<any>();

  private onDialogBoxSource = new Subject<any>();
  private showNumberSource = new Subject<any>();

  constructor() { }

  // private handleError(error: HttpErrorResponse) {

  //   if (error.error instanceof ErrorEvent) {
  //     console.log('print ********* error');
  //     console.log(error);
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.log(error);
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` + `body was: ${error.error.message}`
  //     );
  //   }
  //   // return an observable with a user-facing error message
  //   return JSON.stringify(error.error);
  // }

  // getDialogBoxState(): Observable<any> {
  //   return this.onDialogBoxSource.asObservable();
  // }

  public onDialogBox$ = this.onDialogBoxSource.asObservable();
  public showNumber$ = this.showNumberSource.asObservable();

  afterDialogBox(data: any) {
    console.log('-----------step 1-----------');
    this.onDialogBoxSource.next(data);
  }

  passWinNumbers(data: Array<Number>) {
    console.log('-----------step 1-----------');
    this.showNumberSource.next(data);
  }

}