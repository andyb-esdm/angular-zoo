import { Component, OnInit } from '@angular/core';

import { ZooAnimal } from '../zoo-animal';

@Component({
  selector: 'app-zoo-animal-form',
  templateUrl: './zoo-animal-form.component.html',
  styleUrls: ['./zoo-animal-form.component.css']
})
export class ZooAnimalFormComponent implements OnInit {
  diets = ['meat', 'fish', 'grass', 'fruit', 'vegetables'];

  model: ZooAnimal = {
    id: 1,
    species: 'Polar Bear',
    name: 'Pete'
  }

  constructor() { }

  ngOnInit() {
  }

  newAnimal() {
    this.model = {
      id: 2,
      species: 'Arctic Fox',
      name: 'Barry'
    }
  }

}
