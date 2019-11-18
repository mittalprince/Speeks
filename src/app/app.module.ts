import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './partials/header/header.component'
import { HeaderAComponent } from './partials/header-a/header-a.component';

import { BuildChartService } from './services/chart.service';
import { DummyDataService } from './services/static-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    HeaderAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BuildChartService,
    DummyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
