import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() pinput:number;

  constructor() {
    console.log("constructor of Even");
   }

  ngOnInit(): void {
    console.log("init of Even"+this.pinput);
  }

}
