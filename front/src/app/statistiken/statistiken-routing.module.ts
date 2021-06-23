import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistikenHomeComponent } from './statistiken-home/statistiken-home.component';

const routes: Routes = [
  { path: 'statistiken', component: StatistikenHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistikenRoutingModule { }
