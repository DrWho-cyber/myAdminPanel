import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDashboardComponent } from './views/main-pg/show-dashboard/show-dashboard.component';
import { DashboardComponent } from './views/side-nav-bar/dashboard/dashboard.component';
import { HotelsComponent } from './views/side-nav-bar/hotels/hotels.component';
import { RoomsComponent } from './views/side-nav-bar/rooms/rooms.component';
import { SalesComponent } from './views/side-nav-bar/sales/sales.component';
import { UsersComponent } from './views/side-nav-bar/users/users.component';


const routes: Routes = [
  { path: 'dashboard', component: ShowDashboardComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sales', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
