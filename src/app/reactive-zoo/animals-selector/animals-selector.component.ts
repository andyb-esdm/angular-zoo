import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './animals-selector.component.html',
  styleUrls: ['./animals-selector.component.css']
})
export class AnimalsSelectorComponent implements OnInit {
  touched = false;

  @Input() parent: FormGroup;

  @Input() selected: Animal[];

  @Input() animals: Animal[];

  @Output() select = new EventEmitter<Animal>();
  constructor() { }

  ngOnInit() {
  }

  get invalid() {
    return (
      this.parent.hasError('noAnimals') &&
      this.touched
    );
  }

  exists(animal: Animal) {
    return !!~this.selected.indexOf(animal);
  }

  isActive(animal: Animal) {
    return this.exists(animal);
  }

  onSelect(animal: Animal) {
    this.touched = true;
    this.select.emit(animal);
  }

}
