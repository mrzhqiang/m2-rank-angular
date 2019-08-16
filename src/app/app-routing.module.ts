import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HumansComponent} from './humans/humans.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HumanDetailComponent} from './human-detail/human-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HumanDetailComponent},
  {path: 'humans', component: HumansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
