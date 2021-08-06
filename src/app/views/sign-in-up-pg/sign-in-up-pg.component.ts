import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in-up-pg',
  templateUrl: './sign-in-up-pg.component.html',
  styleUrls: ['./sign-in-up-pg.component.css']
})
export class SignInUpPgComponent implements OnInit {
  visibility:boolean = true
  
  
  constructor(private route:Router, private location: Location) { }

  ngOnInit(): void {
  }

  goToRegistration(){
    this.route.navigate(['/registration']);
    this.visibility = false;
  }

  goBack(): void {
    this.visibility = true;
    this.location.back();
  }
  
}
