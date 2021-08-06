import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './shared-components/registration/registration.component';
import { TemplateDrivenFormComponent } from './shared-components/template-driven-form/template-driven-form.component';
import { DashboardComponent } from './views/side-nav-bar/dashboard/dashboard.component';
import { HotelsComponent } from './views/side-nav-bar/hotels/hotels.component';
import { RoomsComponent } from './views/side-nav-bar/rooms/rooms.component';
import { SalesComponent } from './views/side-nav-bar/sales/sales.component';
import { SideNavBarComponent } from './views/side-nav-bar/side-nav-bar.component';
import { UsersComponent } from './views/side-nav-bar/users/users.component';
import { SignInUpPgComponent } from './views/sign-in-up-pg/sign-in-up-pg.component';
import { UpdateHotelComponent } from './views/update-hotel/update-hotel.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Hotels', component: HotelsComponent},
  {path:'update/:key', 
    component:UpdateHotelComponent},
  { path: 'Rooms', component: RoomsComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Sales', component: SalesComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'templateDrivenform', component: TemplateDrivenFormComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
