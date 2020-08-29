import { Component,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  title = 'assignment1';
  username = 'Vinit';
  currentcounter : any;
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  ngOnInit(): void {
   

    
  }


}
