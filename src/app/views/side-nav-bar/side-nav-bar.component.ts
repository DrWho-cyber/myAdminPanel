import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  menuIcon:string = 'reorder';
 
  constructor() { }

  ngOnInit(): void {
  }

  mode = new FormControl('side');

  links: {name:string, icon:string}[] = [{name: 'Dashboard', icon: 'dashboard'}, {name: 'Hotels', icon: 'folder_open'}, {name: 'Rooms', icon: 'room'}, {name: 'Users', icon: 'verified_user'}, {name: 'Sales', icon: 'star'}];
  
}

// shoes.selectedOptions.selected[0]?.value