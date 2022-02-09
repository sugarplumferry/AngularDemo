import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data: Array<any> = [];

  constructor() {

  }

  ngOnInit(): void {
    this.data = [
      {
        "Title": "Items rarity",
        "Content": "Legendary, unique, rare, common",
        "Hint": "Kill the boss!"
      },
      {
        "Title": "Items drop",
        "Content": "0.001, 0.01, 0.1, 0.5",
        "Hint": "Sell your soul!"
      }
    ]
  }

  showHint(item: any){
    let index = this.data.indexOf(item);
    let temp = this.data[index].Content;
    this.data[index].Content = this.data[index].Hint;
    setTimeout(()=>{
      this.data[index].Content = temp
    }, 1000)
  }


}
