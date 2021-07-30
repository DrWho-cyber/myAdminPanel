import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


const materials: any = [
  MatSidenavModule,
  MatNativeDateModule,
  MatRadioModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class AppMaterialModule { }
