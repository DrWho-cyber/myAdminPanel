import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  User } from 'src/app/models/user.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [CrudServicesService]
})
export class RegistrationComponent implements OnInit {
  userName!: string;
  userSurName!: string;
  userEmail!: string;
  userPassword!: string;
  userAge!: number;
  userGender!: any;


  @ViewChild('fileInput') fileInput!: ElementRef;
  picturesArr: any[] = [];
  user:User = new User ("","","","","",0,0,[])

  uploadFileEvt(imgFile: any) {

    if (imgFile.target.files && imgFile.target.files[0]) {
      let self = this;
      for (let i = 0; i < imgFile.target.files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(imgFile.target.files[i]);
        reader.onload = function () {
          self.picturesArr.push(reader.result);
        }
      }
    }

  }


  constructor(private firebase: CrudServicesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
     var user:User = new User(
      "",
      this.userName,
      this.userSurName,
      this.userEmail,
      this.userPassword,
      this.userAge,
      this.userGender,
      this.picturesArr
    )

    console.log(user)
    this.firebase.createUser(JSON.parse(JSON.stringify(user)))
      .then((response: any) => {
        
      })
  }
  
}
