import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';



@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Aardvark', description: 'A medium-sized, burrowing, nocturnal mammal native to Africa.', imageUrl: '/assets/aardvark.png'},
    { name: 'African Elephant', description: 'The largest and heaviest land animal on Earth', imageUrl: 'assets/african-elephant.png'},
    { name: 'Eurasian Lynx', description: 'A medium-sized cat native to Eastern Europe, Siberia and Southern Asia', imageUrl: '/assets/eurasian-lynx.png'},
    { name: 'Komodo Dragon', description: 'The largest species of lizard, found in Indonesia', imageUrl: '/assets/komodo-dragon.png'},
    { name: 'Giraffe', description: 'The tallest living terrestrial animal and the largest ruminant from Africa', imageUrl: '/assets/giraffe.png'},
    { name: 'Plains Zebra', description: 'The most common and geographically widespread species of zebra.', imageUrl: '/assets/zebra.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

  isZebra(animal: Animal): boolean {
    return animal.name === 'Plains Zebra';
  }

}
