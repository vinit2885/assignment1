import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() pinput: number; // decorate the property with @Input()
  
  /*ngOnInit(): void {
    if(this.pinput%2!=0){
      console.log("odd number");
    }
  }*/
  constructor() {
    console.log("constructor of Odd"+this.pinput);
   }

  ngOnInit(): void {
    console.log("init of Odd"+this.pinput);
  }

}
