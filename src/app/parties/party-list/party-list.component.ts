import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.partiesData = [
      {
        number: '9675697987',
        totalSale: '100'
      },
      {
        number: '9585738434',
        totalSale: '600'
      },
      {
        number: '8674397987',
        totalSale: '200'
      },
      {
        number: '7697345345',
        totalSale: '00'
      },
      {
        number: '9879684734',
        totalSale: '800'
      },
      {
        number: '8674397987',
        totalSale: '200'
      },
      {
        number: '7697345345',
        totalSale: '00'
      },
      {
        number: '9879684734',
        totalSale: '800'
      },
      {
        number: '8674397987',
        totalSale: '200'
      },
      {
        number: '7697345345',
        totalSale: '00'
      },
      {
        number: '9879684734',
        totalSale: '800'
      }
    ];
  }

  partiesData:any[]=[];

  headerActionHandler(actionContext:string){
      console.log("Action Emmitted : " + actionContext);
  }
}
