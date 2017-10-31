import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-edit-animal-details',
  templateUrl: './edit-animal-details.component.html',
  styleUrls: ['./edit-animal-details.component.css']
})
export class EditAnimalDetailsComponent implements OnInit {
  @Input() animal: Animal;
  constructor() { }

  ngOnInit() {
  }

}
