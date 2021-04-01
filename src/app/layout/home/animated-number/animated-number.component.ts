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
  public number1: number = 47800;
  public number2: number = 65112;
  public number3: number = 36784;
  public observable: Observable<boolean>;
  private observer!: Observer<boolean>;

  public config = {
    animation: 'slide',
    format: 'd',    
    theme: 'slot-machine',
    value: 11110,
    auto: false,
  }

  num1 = [];

  stopCount = false;

  constructor(private apiService: ApiService) {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).pipe(share());
    // this.observer.next(true);
    setTimeout(() => this.observer.next(true), 100);
   }

  ngOnInit(): void {
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
