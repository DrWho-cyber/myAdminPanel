import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorisationComponent } from './shared-components/autorisation/autorisation.component';
import { RegistrationComponent } from './shared-components/registration/registration.component';
import { TemplateDrivenFormComponent } from './shared-components/template-driven-form/template-driven-form.component';
import { MainPgComponent } from './views/main-pg/main-pg.component';
import { DashboardComponent } from './views/side-nav-bar/dashboard/dashboard.component';
import { HotelsComponent } from './views/side-nav-bar/hotels/hotels.component';
import { RoomsComponent } from './views/side-nav-bar/rooms/rooms.component';
import { SalesComponent } from './views/side-nav-bar/sales/sales.component';
import { UsersComponent } from './views/side-nav-bar/users/users.component';
import { SignInUpPgComponent } from './views/sign-in-up-pg/sign-in-up-pg.component';
import { UpdateHotelComponent } from './views/update-hotel/update-hotel.component';


const routes: Routes = [ 
  { path: 'main', component: MainPgComponent,
  children: [
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Hotels', component: HotelsComponent},
  { path: 'Rooms', component: RoomsComponent},
  { path: 'Users', component: UsersComponent},
  { path: 'Sales', component: SalesComponent},
  { path: 'templateDrivenform', component: TemplateDrivenFormComponent},
  { path:'update/:key',  component:UpdateHotelComponent}
  ]
},
  
  
  { path: 'registration', component: RegistrationComponent },
  { path: 'autorisation', component: AutorisationComponent},
  { path: 'signInUp', component: SignInUpPgComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
