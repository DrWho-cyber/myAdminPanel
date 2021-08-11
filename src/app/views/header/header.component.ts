import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  icons:string[] = ['mail', 'notifications', 'logout']
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  

  onbtnClick(icon:string){
    if(icon == "logout"){
      this.route.navigate(['/signInUp'])
    }
  }
}
