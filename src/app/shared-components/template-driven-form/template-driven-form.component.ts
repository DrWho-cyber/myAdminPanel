import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, OnDestroy {

  constructor( private firebase:CrudServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
    
    @ViewChild('form') form!: NgForm;
    key: string = '';

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((route: any) => {
    //   this.key = route['key']
    //   try {
    //     this.firebase.getUsers(this.key).subscribe((response: any) => {
    //       this.form.setValue({
    //         name: response.name,
    //         surname: response.surname,
    //         age: response.age,
    //         gender: response.gender,
    //         imageUrl: response.imageUrl,
    //         mail: response.mail
    //       });
    //     })
    //   } catch (arr) { }
    // })
  }

//დააფდეითება
  UpdateHotelInfo(form: NgForm) {
    // var hotel = form.value as Hotel;
    // hotel.key = this.key;
    // this.firebase.updateHotel(hotel).then((response: any) => {
    //   this.form.reset();
    //   this.router.navigate(["/"]);
    // })
  }

  onFormSubmit(form:NgForm){
    var item = form.value as Hotel;
    this.firebase.createHotel(JSON.parse(JSON.stringify(item)))
      .then((response: any) => {
        
      })
    console.log(item);
  }

//ფორმის გასუფთავება
  ngOnDestroy(): void {
    this.form.setValue({});
  }
}
