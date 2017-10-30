import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name = 'Aardvark';
  description = 'A medium-sized, burrowing, nocturnal mammal native to Africa.';
  
  constructor() { }

  ngOnInit() {
  }

}
