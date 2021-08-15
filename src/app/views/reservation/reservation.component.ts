import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  unuvalableDate = (d: Date | null): boolean => {
    const day = (d || new Date())
    // Prevent Saturday and Sunday from being selected.
    return day > new Date() 
  
  }
     


  minDate = new Date()
reserveDates:any[] = []
key!:string;
hotel!:Hotel;
rooms!:any[];
activeRoom!:any;
index!:number;
dateObj!:{startDate:any,
  endDate:any
};
  constructor(private firebase: CrudServicesService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route: any) => {
       this.key = route['key']
       this.index = route['index']
       
       try {
         this.firebase.getHotel(this.key).subscribe((response: any) => {
           this.hotel = response;
          this.rooms = response.rooms
          this.activeRoom = this.rooms[route['index']]
          this.reserveDates = []
this.rooms[route['index']].reserveDates.forEach((element:any) => {
  this.dateObj = {
    startDate: new Date(element.start.seconds*1000),
    endDate: new Date(element.end.seconds*1000)
  }
  this.reserveDates.push(this.dateObj);
  
}); 
   });
       } catch (arr) { }
     })

  }

  reserve(hotel:Hotel){
   this.reserveDates.forEach(element => {
     if(this.range.value.start.toString() == element.startDate.toString()){
       alert('It is already resered ad that date, please, choose another availeble dates')
       return
     }
   });

hotel.key = this.key;
(this.rooms[this.index] as Room).reserveDates.push(this.range.value);
(this.hotel as Hotel).rooms = this.rooms;
console.log((this.hotel as Hotel).rooms)
this.firebase.updateHotel(this.hotel)
  }


}
