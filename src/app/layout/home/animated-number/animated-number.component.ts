import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-animated-number',
  templateUrl: './animated-number.component.html',
  styleUrls: ['./animated-number.component.css']
})
export class AnimatedNumberComponent implements OnInit {
  public number: number = 47800;
  public observable: Observable<boolean>;
  private observer!: Observer<boolean>;

  public config = {
    animation: 'slide',
    format: 'd',
    theme: 'slot-machine',
    duration: 8000,
    value: 11110,
    auto: false,
  }

  prizeNum1 = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0
  }

  prizeNum2 = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0
  }

  prizeNum3 = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0
  }



  num1 = [];

  stopCount = false;

  constructor(private apiService: ApiService) {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).pipe(share());
    // this.observer.next(true);
    setTimeout(() => this.observer.next(true), 5000);
   }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.prizeNum1.num1 = Math.floor(Math.random() * 9);
      this.prizeNum1.num2 = Math.floor(Math.random() * 9);
      this.prizeNum1.num3 = Math.floor(Math.random() * 9);
      this.prizeNum1.num4 = Math.floor(Math.random() * 9);
      this.prizeNum1.num5 = Math.floor(Math.random() * 9);

      this.prizeNum2.num1 = Math.floor(Math.random() * 9);
      this.prizeNum2.num2 = Math.floor(Math.random() * 9);
      this.prizeNum2.num3 = Math.floor(Math.random() * 9);
      this.prizeNum2.num4 = Math.floor(Math.random() * 9);
      this.prizeNum2.num5 = Math.floor(Math.random() * 9);

      this.prizeNum3.num1 = Math.floor(Math.random() * 9);
      this.prizeNum3.num2 = Math.floor(Math.random() * 9);
      this.prizeNum3.num3 = Math.floor(Math.random() * 9);
      this.prizeNum3.num4 = Math.floor(Math.random() * 9);
      this.prizeNum3.num5 = Math.floor(Math.random() * 9);

      if (this.stopCount) {
        clearInterval(interval);
      }
    }, 100);

    this.apiService.showNumber$.subscribe((data: Array<Number>) => {
      console.log('Inside event subscribe');
      console.log(data);
      setTimeout(() => {
        this.stopCount = true;
        // this.observer.next(true)
      }, 3000);
    });
  }

}
