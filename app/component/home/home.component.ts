import { Component, OnInit, AfterViewInit, } from '@angular/core';
// import 'jarallax';
import { List } from './List';

// declare var jarallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: List [];

  constructor() { }

  // ngAfterViewInit() {
  //   jarallax(document.querySelectorAll('.jarallax'),{
  //     speed: 0.2
  //   });
  // }
    
  ngOnInit() {
    this.list = [
      {
      listName: 'Heal',
      description: 'We can never move forward if we dont first heal',
      image: './assets/img/love.jpg'
      },
      {
        listName: 'Rebuild',
        description: 'This is the heard part starting again',
        image: './assets/img/woman.jpg'
      },
      {
        listName: 'Live',
        description: 'Live that it',
        image: './assets/img/blue.jpg'
      },

    ]
  }
}
