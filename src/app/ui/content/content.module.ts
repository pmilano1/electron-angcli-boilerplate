import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ClarityModule} from "@clr/angular";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportsComponent} from './reports/reports.component';

const components = [
  DashboardComponent,
];

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  declarations: [
    components,
    ReportsComponent
  ],
  exports: [
    components
  ],
  providers: []
})
export class ContentModule {
}
