import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor( private firebase:CrudServicesService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm){
    var item = form.value as Hotel;
    this.firebase.createHotel(JSON.parse(JSON.stringify(item)))
      .then((response: any) => {
        
      })
    console.log(item);
  }
}
