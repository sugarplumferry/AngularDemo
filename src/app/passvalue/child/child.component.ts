import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  item : any;

  @Output()
  hint = new EventEmitter<any>();

  showHint() {
    this.hint.emit(this.item);
  }
}
