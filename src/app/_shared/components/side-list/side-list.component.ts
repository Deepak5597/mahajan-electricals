import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'me-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  @Input('sideListItmes') sideListItems:any[] = [];
  @Input('context') context:string = 'default';
  @Output() itemSelected:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  selectedSideListItem:number = 0;
  ngOnInit(): void {
  }

  emitItemSelection(id:number){
    this.itemSelected.emit(id);
  }


}
