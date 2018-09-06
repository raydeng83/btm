import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutes } from "./main.routing";

import { DemoComponent } from './main.component';

import { WINDOW_PROVIDERS } from '../shared/helpers/window.helper';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(DemoRoutes)
  ],
  declarations: [ 
    DemoComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class DemoModule { }
