import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPgComponent } from './views/main-pg/main-pg.component';
import { SideNavBarComponent } from './views/side-nav-bar/side-nav-bar.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { AutorisationComponent } from './shared-components/autorisation/autorisation.component';
import { ReactiveFormComponent } from './shared-components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './shared-components/template-driven-form/template-driven-form.component';
import { RegistrationComponent } from './shared-components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPgComponent,
    SideNavBarComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    AutorisationComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
