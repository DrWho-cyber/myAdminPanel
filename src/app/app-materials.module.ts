import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


const material: any = [
  MatSidenavModule,
  MatNativeDateModule,
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class AppMaterialModule { }
