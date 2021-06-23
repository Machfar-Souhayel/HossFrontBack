import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WkaDetailsHomeComponent } from './wka-details-home/wka-details-home.component';

const routes: Routes = [
  { path: 'wka-details', component: WkaDetailsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WkaDetailsRoutingModule { }
