import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './shared-components/registration/registration.component';
import { DashboardComponent } from './views/side-nav-bar/dashboard/dashboard.component';
import { HotelsComponent } from './views/side-nav-bar/hotels/hotels.component';
import { RoomsComponent } from './views/side-nav-bar/rooms/rooms.component';
import { SalesComponent } from './views/side-nav-bar/sales/sales.component';
import { UsersComponent } from './views/side-nav-bar/users/users.component';


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Hotels', component: HotelsComponent },
  { path: 'Rooms', component: RoomsComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Sales', component: SalesComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
