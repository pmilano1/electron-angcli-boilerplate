import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './layout/header/header.component';
import {MainComponent} from './layout/main/main.component';
import {ClarityModule} from "@clr/angular";
import {DashboardComponent} from './content/dashboard/dashboard.component';
import {ReportsComponent} from './content/reports/reports.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, DashboardComponent, ReportsComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule {
}
