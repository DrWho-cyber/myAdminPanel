import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  key!: string;
  index: any;
  hotel: any;
  rooms: any[] = [];
  @ViewChild('form') form!: NgForm;
  roomTypes: string[] = ['Delux', 'Superior', 'Apollo', 'Tween', 'Single', 'King'];
  hotelFacilities: string[] = ['Free WiFi', 'Airport shuttle', 'Family rooms', 'Free parking', 'Non-smoking rooms', 'Room service', 'Air conditioning', 'Flatscreen TV', 'Coffee/tea maker', 'Private balcony', 'Housekeeping'];
  views: string[] = ['Sea view', 'Garden view', 'Landmark view']
  otherPictures: any[] = []

  cvForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private firebase: CrudServicesService,
  ) { }

  uploadMultFileEvt(imgFile: any) {
    let self = this;
    for (let i = 0; i < imgFile.target.files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(imgFile.target.files[i]);
      reader.onload = function () {
        self.otherPictures.push(reader.result);
      }
    }
  }

  ngOnInit(): void {
    this.createForm()
    this.activatedRoute.params.subscribe((route: any) => {

      //  this.visible = false
      this.key = route['key']
      this.index = route['index']
      try {
        this.firebase.getHotel(this.key).subscribe((response: any) => {
          this.hotel = response
          this.rooms = response.rooms
        });

      } catch (arr) { }
    })
    setTimeout(() => {
      console.log(this.rooms[this.index])
      if (this.index >= 0) {
        this.cvForm.patchValue(this.rooms[this.index])
      }
    }, 1000);
  }

  createForm() {
    this.cvForm = this.formBuilder.group({
      roomType: [null, Validators.required],
      facilities: [null, Validators.required],
      view: [null, Validators.required],
      sale: [null, Validators.required],
      reserveDates: [{ value: null, disabled: true }],
      prise: [null, Validators.required],
      smoking: [null, Validators.required],
      animals: [null, Validators.required],
      parking: [null, Validators.required],
      size: [null, Validators.required],
      pictures: [null],
      children: new FormGroup({
        tosix: new FormControl(null, Validators.required),
        totvelve: new FormControl(null, Validators.required)
      })
    })
  }
  arr: any[] = [];
  onFormSubmit(hotel: Hotel) {
    this.rooms.push(this.cvForm.value)
    hotel.rooms = this.rooms;
    hotel.key = this.key;
    (this.form.value as Room).pictures = this.otherPictures;
    (this.form.value as Room).reserveDates = this.arr;
    console.log(this.hotel);

    this.firebase.updateHotel(hotel)
    // var name:any = this.cvForm.get('fullName')!.value;
    // var email = this.cvForm.get('email')!.value;
  }


  getRoomInfo() {
    //მაგალითი: this.cvForm.get('roomType')?.setValue('giorgi');
  }

  update(hotel: Hotel) {
    hotel.rooms[this.index] = this.cvForm.value
    this.firebase.updateHotel(hotel)
    // if(this.rooms == undefined){this.rooms = this.cvForm.value}
    // else{
    // this.rooms.push(this.cvForm.value)}
    // hotel.rooms = this.rooms;
    // this.firebase.updateHotel(hotel)
  }

}


// emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

