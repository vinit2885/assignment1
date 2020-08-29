import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { OddComponent } from '../odd/odd.component';
import { EvenComponent } from '../even/even.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  @ViewChild(OddComponent) oddcomponent:OddComponent;
  @ViewChild(EvenComponent) evencomponent:EvenComponent;
  
  constructor() { }
  counter : number=0;
  timerlimit:number=5000;
  timeoutevent:any;
  ngOnInit(): void {
  }
  starttimer(){
    console.log("timer started");
    //console.log();
    //this.newItemEvent = 'initial';
    this.counter = 0;
    this.timeoutevent = setInterval(() => {            
      //console.log(this.counter);
      if(this.counter%2==0){
        this.oddcomponent.pinput = this.counter;      
      }else{
        this.evencomponent.pinput = this.counter;
      }
      this.counter++;
    },this.timerlimit);
  }
  stoptimer(){
    console.log(this.timeoutevent);
    clearTimeout(this.timeoutevent);
  }

}
