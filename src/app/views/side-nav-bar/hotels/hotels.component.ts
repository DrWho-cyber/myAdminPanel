import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  allHotels: any[] = [];
  constructor(private firebase: CrudServicesService) { }

  ngOnInit(): void {
    this.firebase.readAllHotel().subscribe((response: any) => {
      this.allHotels = [];
      response.forEach((element: any) => {
        var hotel = element.payload.doc.data();
        hotel.key = element.payload.doc.id;
        this.allHotels.push(hotel);
      });
      console.log(this.allHotels)
    });
    
  }


}
