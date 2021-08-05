import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers:User[] =[];
  constructor( private firebase:CrudServicesService) { }

  ngOnInit(): void {
    this.firebase.readAllUsers().subscribe((response: any) => {
      this.allUsers = [];
      response.forEach((element: any) => {
        var user = element.payload.doc.data();
        user.key = element.payload.doc.id;
        this.allUsers.push(user);
      });
      console.log(this.allUsers)
    });
    
  }


}
