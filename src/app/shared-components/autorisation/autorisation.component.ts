import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {
  userEmail!: string;
  userPassword!: string;

  constructor( private fireAuth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  onbtnClick(){

    this.fireAuth.signInWithEmailAndPassword(this.userEmail,this.userPassword)
    .then((result:any) =>{
      alert("you are logged in")
    } ).catch((error:any) =>{
      alert(error.message)
    })

  }

}
