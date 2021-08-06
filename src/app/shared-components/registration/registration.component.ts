import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user.model';
import { CrudServicesService } from 'src/app/service/crud-services.service';


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
  userPhone!: number;
  userPassword!: string;
  userAge!: number;
  userGender!: any;


  @ViewChild('fileInput') fileInput!: ElementRef;
  ProfPictur: any;
  user: User = new User("", "", "", "", 1, "", 0, 0, "", 0)

  uploadFileEvt(imgFile: any) {
    let self = this;
    const reader = new FileReader();
    reader.readAsDataURL(imgFile.target.files[0]);
    reader.onload = function () {
      console.log(imgFile.target.files[0], reader.result)
      self.ProfPictur = reader.result;
    }
  }



  constructor(private firebase: CrudServicesService,
    private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var user: User = new User(
      "",
      this.userName,
      this.userSurName,
      this.userEmail,
      this.userPhone,
      this.userPassword,
      this.userAge,
      this.userGender,
      this.ProfPictur,
      0
    )

    this.fireAuth.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
      .then((result: any) => {
        console.log("success")
      })

    console.log(user)
    this.firebase.createUser(JSON.parse(JSON.stringify(user)))
      .then((response: any) => {

      })
  }

}
