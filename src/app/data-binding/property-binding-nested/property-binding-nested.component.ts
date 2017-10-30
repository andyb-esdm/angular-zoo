import { Component } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-property-binding-nested',
  templateUrl: './property-binding-nested.component.html',
  styleUrls: ['./property-binding-nested.component.css']
})
export class PropertyBindingNestedComponent {

  animal1: Animal = {
    name: 'Plains Zebra',
    description: 'The most common and geographically widespread species of zebra.',
    imageUrl: '/assets/zebra.png'
  }

  animal2: Animal = {
     name: 'Giraffe',
     description: 'The tallest living terrestrial animal and the largest ruminant from Africa',
     imageUrl: '/assets/giraffe.png'
  }

  isZebra(animal: Animal): boolean {
    return animal.name === 'Plains Zebra';
  }

}
