import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './ui/content/dashboard/dashboard.component';
import {ReportsComponent} from './ui/content/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'reports', component: ReportsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
