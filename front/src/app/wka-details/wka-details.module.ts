import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'

import { SharedModule } from '../shared/shared.module';
import { WkaDetailsRoutingModule } from './wka-details-routing.module';
import { WkaDetailsHomeComponent } from './wka-details-home/wka-details-home.component';
import { WkaMapComponent } from './wka-map/wka-map.component';

@NgModule({
  declarations: [
    WkaDetailsHomeComponent,
    WkaMapComponent
  ],
  imports: [
    CommonModule,
    WkaDetailsRoutingModule,
    SharedModule,
    GoogleMapsModule
  ]
})
export class WkaDetailsModule { }
