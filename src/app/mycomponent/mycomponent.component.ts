import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  username = "vinit";
  
  constructor() { 
    //username : ""; 
  }

  ngOnInit(): void {
  }
  resetValues(){
    this.username="";
  }

}
