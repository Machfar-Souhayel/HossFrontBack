import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';

// routing Modules 
import { WkaDetailsModule } from './wka-details/wka-details.module';
import { StatistikenModule } from './statistiken/statistiken.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    KontaktComponent,
    NotFoundComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    WkaDetailsModule,
    StatistikenModule,
    SharedModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
