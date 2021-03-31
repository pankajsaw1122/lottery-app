import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';
import { ApiService } from '../../../shared/services/api.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.css']
})
export class SpinWheelComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) mywheel: any;
  // subscription: Subscription;
  count = 0;
  numImage = {
    show: false,
    url: ''
  };

  alphImg = {
    show: true,
    url: 'http://3.7.28.96:3000/lower-circle/reset.png'
  };

  isOpen = false;
  duration = 7;
  show = false;
  idToLandOn = 0;
  items: any;
  spinAlphaWheel = true;
  hideWheel = false;
  imageArray: any;

  prizeNum = {
    numWheelNum: '00',
    alphaWheelNum: '0',
    num1: '0',
    num2: '0',
    num3: '0',
    num4: '0'
  }

  showWonMssage = false;

  constructor(private apiService: ApiService) {

    console.log('Inside constructor--------');
  }

  ngAfterViewInit() {
    console.log('only after THIS EVENT "wheel" is usable!!');
    // this.alphaWheel.spin();
    // this.mywheel.spin();
  }

  isOpenChange($event: any) {
    this.isOpen = $event;
  }

  ngOnInit() {

    this.handleNumWheel();

    this.apiService.onDialogBox$.subscribe((data: any) => {
      console.log('Inside event subscribe');
      // console.log(data);
      this.mywheel.spin();
    });

  }

  runFirstWheel(event: any) {
    this.mywheel.spin();
  }

  clearWheel() {
    this.items = [];
  }

  handleNumWheel() {
    console.log('Step 4');
    this.idToLandOn = 3;

    this.imageArray = [
      'http://3.7.28.96:3000/upper-circle/10.png',
      'http://3.7.28.96:3000/upper-circle/11.png',
      'http://3.7.28.96:3000/upper-circle/12.png',
      'http://3.7.28.96:3000/upper-circle/13.png',
      'http://3.7.28.96:3000/upper-circle/14.png',
      'http://3.7.28.96:3000/upper-circle/15.png',
      'http://3.7.28.96:3000/upper-circle/16.png',
      'http://3.7.28.96:3000/upper-circle/17.png',
      'http://3.7.28.96:3000/upper-circle/18.png',
      'http://3.7.28.96:3000/upper-circle/19.png',
      'http://3.7.28.96:3000/upper-circle/20.png',
      'http://3.7.28.96:3000/upper-circle/21.png',
      'http://3.7.28.96:3000/upper-circle/22.png',
      'http://3.7.28.96:3000/upper-circle/23.png',
      'http://3.7.28.96:3000/upper-circle/24.png',
      'http://3.7.28.96:3000/upper-circle/25.png',
      'http://3.7.28.96:3000/upper-circle/26.png',
      'http://3.7.28.96:3000/upper-circle/27.png',
      'http://3.7.28.96:3000/upper-circle/28.png',
      'http://3.7.28.96:3000/upper-circle/29.png',
      'http://3.7.28.96:3000/upper-circle/30.png',
    ];

    this.items = [
      { id: 1, 'fillStyle': '#eae56f', text: '10' },
      { id: 2, 'fillStyle': '#89f26e', text: '11' },
      { id: 3, 'fillStyle': '#7de6ef', text: '12' },
      { id: 4, 'fillStyle': '#e7706f', text: '13' },
      { id: 5, 'fillStyle': '#eae56f', text: '14' },
      { id: 6, 'fillStyle': '#89f26e', text: '15' },
      { id: 7, 'fillStyle': '#7de6ef', text: '16' },
      { id: 8, 'fillStyle': '#e7706f', text: '17' },
      { id: 9, 'fillStyle': '#eae56f', text: '18' },
      { id: 10, 'fillStyle': '#89f26e', text: '19' },
      { id: 11, 'fillStyle': '#7de6ef', text: '20' },
      { id: 12, 'fillStyle': '#e7706f', text: '21' },
      { id: 13, 'fillStyle': '#eae56f', text: '22' },
      { id: 14, 'fillStyle': '#89f26e', text: '23' },
      { id: 15, 'fillStyle': '#7de6ef', text: '24' },
      { id: 16, 'fillStyle': '#e7706f', text: '25' },
      { id: 17, 'fillStyle': '#eae56f', text: '26' },
      { id: 18, 'fillStyle': '#89f26e', text: '27' },
      { id: 19, 'fillStyle': '#7de6ef', text: '28' },
      { id: 20, 'fillStyle': '#e7706f', text: '29' },
      { id: 21, 'fillStyle': '#eae56f', text: '30' }
    ];

    // setTimeout(() => {
    //   console.log('SPin wheel 1111');
    //   this.mywheel.spin();
    // }, 5000);

  }

  before() {
    console.log('Step 1');
    // this.clearWheel();
    this.mywheel.reset();

  }

  after() {
    console.log('Step 2');
    console.log('After function called');
    this.count++;

    if (this.alphImg.show) {
      this.prizeNum.numWheelNum = (this.idToLandOn + 9).toString();
      this.numImage.url = this.imageArray[this.idToLandOn - 1];
      this.numImage.show = true;
      this.hideWheel = true;
      this.clearWheel();
      this.mywheel.reset();
      this.handleAlphaWheel();
    }
    if (this.count == 2) {
      this.prizeNum.alphaWheelNum = this.items[this.idToLandOn - 1].text;

      this.apiService.passWinNumbers([4526, 5678, 8798, 9876]);
      setTimeout(() => {
        this.showWonMssage = true;
      }, 3000);
    }
    

  }

  handleAlphaWheel() {
    console.log('Inside alpha wheel');
    // this.mywheel.reset();
    this.spinAlphaWheel = false;
    this.idToLandOn = 4;
    this.items = [
      { id: 1, 'fillStyle': '#eae56f', text: 'A' },
      { id: 2, 'fillStyle': '#89f26e', text: 'B' },
      { id: 3, 'fillStyle': '#7de6ef', text: 'C' },
      { id: 4, 'fillStyle': '#e7706f', text: 'D' },
      { id: 5, 'fillStyle': '#eae56f', text: 'E' },
      { id: 6, 'fillStyle': '#89f26e', text: 'F' },
      { id: 7, 'fillStyle': '#7de6ef', text: 'G' },
      { id: 8, 'fillStyle': '#e7706f', text: 'H' },
      { id: 9, 'fillStyle': '#eae56f', text: 'I' }
    ];
    // this.ngAfterViewInit();
    setTimeout(() => {
      this.alphImg.show = false;
      this.hideWheel = false;
      this.mywheel.spin();
    }, 3000);

  }

  reset() {
    console.log('Step 3');
    this.mywheel.reset();

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
