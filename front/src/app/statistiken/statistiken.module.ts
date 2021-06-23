import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { StatistikenRoutingModule } from './statistiken-routing.module';
import { StatistikenHomeComponent } from './statistiken-home/statistiken-home.component';
import { StatistikenGraphComponent } from './statistiken-graph/statistiken-graph.component';

@NgModule({
  declarations: [
    StatistikenHomeComponent,
    StatistikenGraphComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatistikenRoutingModule,
    
  ],
  exports: []
})
export class StatistikenModule { }
