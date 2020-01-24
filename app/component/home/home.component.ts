import { Component, OnInit, AfterViewInit, } from '@angular/core';
import 'jarallax';

declare var jarallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'),{
      speed: 0.2
    });
  }
    
}
