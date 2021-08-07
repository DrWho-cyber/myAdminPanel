import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, OnDestroy {

  constructor(private firebase: CrudServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  @ViewChild('form') form!: NgForm;
  key: string = '';
  
 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route: any) => {
      this.key = route['key']
      try {
        this.firebase.getHotel(this.key).subscribe((response: any) => {
          this.form.setValue({
            userName: response.userName,
            address: response.address,
            phone: response.phone,
            email: response.email,
            stars: response.stars,
            status: response.status
          });
        })
      } catch (arr) { }
    })

    
  }

  //დააფდეითება
  UpdateHotelInfo(form: NgForm) {
    var hotel = form.value as Hotel;
    hotel.key = this.key;
    this.firebase.updateHotel(hotel).then((response: any) => {
      this.form.reset()
    })
    this.goBack()
  }

  goBack(): void {
    this.location.back();
  }

  onFormSubmit(form: NgForm) {
    var item = form.value as Hotel;
    this.firebase.createHotel(JSON.parse(JSON.stringify(item)))
      .then((response: any) => {
       console.log(response);
      })
    
  }

  //ფორმის გასუფთავება
  ngOnDestroy(): void {
    // this.form.patchValue({});
  }
}
