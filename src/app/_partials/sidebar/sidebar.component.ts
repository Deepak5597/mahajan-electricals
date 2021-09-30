import { Component, OnInit } from '@angular/core';
import { SidebarConfig } from './sidebar.config';

@Component({
  selector: 'me-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  sidenavItems:any[] = [];
  ngOnInit(): void { 
    this.sidenavItems = new SidebarConfig().sidenavItems;
  }
  
  selectedNavIndex:number= 0;
  sidenavSelected(index:number){
    this.selectedNavIndex = index;
    console.log(this.selectedNavIndex)
  }
}
