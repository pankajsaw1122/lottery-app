import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxWheelModule } from 'ngx-wheel';
import { Ng9OdometerModule } from 'ng9-odometer';
import { MatDialogModule } from '@angular/material/dialog';

import { Ng2ScreenshotModule } from 'ng2-screenshot';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';
import { AnimatedNumberComponent } from './animated-number/animated-number.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxWheelModule,
    Ng2ScreenshotModule,
    Ng9OdometerModule,
    MatSliderModule,
    MatDialogModule,
    CountdownModule
  ],
  declarations: [HomeComponent, SpinWheelComponent, AnimatedNumberComponent,MatDialogComponent],
  providers: [],
  entryComponents: [
    MatDialogComponent
  ],
})
export class HomeModule { }
