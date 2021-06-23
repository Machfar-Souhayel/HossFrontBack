import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WkaFilterComponent } from './shared-filter/wka-filter.component';
import { FilterService } from '../services/filter.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    WkaFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    FilterService
  ],
  exports: [
    WkaFilterComponent
  ]
})
export class SharedModule { }
