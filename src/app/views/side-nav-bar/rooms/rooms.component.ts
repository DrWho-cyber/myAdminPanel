import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServicesService } from 'src/app/service/crud-services.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  activeRoom: any[] = [];
  key!:string;
  constructor(private firebase: CrudServicesService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route: any) => {
    if (route['key'] != undefined)
    //  this.visible = false
     this.key = route['key']
     try {
       this.firebase.getHotel(this.key).subscribe((response: any) => {
        this.activeRoom = response.rooms
          console.log(this.activeRoom)
         });
      
     } catch (arr) { }
   })
   console.log(this.key)
  }


  getInfoToupdate(key:string){
 this.route.navigate(['/'])
  }

  deleteHotel(key:string){

  }

}
