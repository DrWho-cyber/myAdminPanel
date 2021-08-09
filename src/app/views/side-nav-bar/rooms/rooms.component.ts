import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  allHotels: any[] = [];
  constructor(private firebase: CrudServicesService,
    private route: Router) { }


  ngOnInit(): void {this.firebase.readAllHotel().subscribe((response: any) => {
    this.allHotels = [];
    response.forEach((element: any) => {
      var hotel = element.payload.doc.data();
      hotel.key = element.payload.doc.id;
      this.allHotels.push(hotel);
    });
  });
  }

}
