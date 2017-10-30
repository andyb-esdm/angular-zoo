import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  aardvark: Animal = {
    name: 'Aardvark',
    description: 'A medium-sized, burrowing, nocturnal mammal native to Africa.',
    imageUrl: '/assets/aardvark.png'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
