import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'me-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent implements OnInit {

  @Input("heading") heading:string = 'Default Heading';
  @Input("count") count:number = 0;
  @Input("context") context:string = 'default'; 

  @Output() actionEmitter:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  triggerAction(actionContext:string){
    this.actionEmitter.emit(actionContext);
  }

}
