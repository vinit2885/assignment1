import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 displayflag =false;
 randomtxt = false;
 servers = [];
 counter=0;

 togglevalue(){
   this.servers.push('Server - '+Math.random());
   console.log(this.servers);
   this.randomtxt = !this.randomtxt;

 }
 addservers(){
   this.counter++;
  this.servers.push('Server - '+this.counter);
  console.log(this.servers);
 }

}
