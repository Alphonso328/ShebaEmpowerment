import { Component, OnInit } from '@angular/core';
import { Soap } from './Soap';
import { Art } from './Art';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    
    soap: Soap[] ; 
    art: Art [] ;

  constructor() { 
    
  }
  
  
  ngOnInit() {
    this.soap = [
      {
      soapName: 'Honey',
      soapSize: 'Small, Regular, Large',
      description: 'All these things and more ',
      image: './assets/img/soap/square.jpg'
    },
      {
        soapName: 'COCO',
        soapSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/soap/plate.jpg'
      },
      {
        soapName: 'Butter',
        soapSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/soap/purple.jpg'
      },
      {
        soapName: 'Vanilla',
        soapSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/soap/slice.jpg'
      },
      {
        soapName: 'Vanilla',
        soapSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/soap/slice.jpg'
      },
      {
        soapName: 'Vanilla',
        soapSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/soap/kit.jpg'
      },
    ];

    this.art = [
      {
        artName: 'Jehovah',
        artSize: 'Small, Regular, Large',
        description: 'All these things and more ',
        image: "./assets/img/art/ab.jpg"
      },
      {
        artName: 'Earth',
        artSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/art/close.jpg'
      },
      {
        artName: 'Man',
        artSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/art/assorted.jpg'
      },
      {
        artName: 'Woman',
        artSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/art/beach.jpg'
      },
      {
        artName: 'Girl',
        artSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/art/brown.jpg'
      },
      {
        artName: 'Boy',
        artSize: 'Small, Regular, Large',
        description: 'A whole Lot of Things ',
        image: './assets/img/art/trees.jpg'
      },
    ];
  }

}
