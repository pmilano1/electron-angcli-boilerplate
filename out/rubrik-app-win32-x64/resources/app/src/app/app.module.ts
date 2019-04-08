import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RubrikService} from './rubrik.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RubrikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
