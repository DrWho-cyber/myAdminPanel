import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {
  userEmail!: string;
  userPassword!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onbtnClick(){
    
  }

}
