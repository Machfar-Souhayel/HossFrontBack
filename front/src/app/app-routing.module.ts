import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WkaDetailsHomeComponent } from './wka-details/wka-details-home/wka-details-home.component';


// Routes configuration
const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'kontakt', component: KontaktComponent },
  {
    path: '', component: WkaDetailsHomeComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
