import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { Animal } from '../animal';
import { AnimalsValidator } from '../animals.validator';


@Component({
  selector: 'app-enclosure-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './enclosure-form.component.html',
  styleUrls: ['./enclosure-form.component.css']
})
export class EnclosureFormComponent implements OnInit {

  @Input() animals: Animal[];

  @Output() add = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    animals: this.fb.array([])
  }, {
      validator: AnimalsValidator
    });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }
  get control() {
    return this.form.get('animals') as FormArray;
  }

  addAnimal(animal: Animal) {
    this.control.push(new FormControl(animal));
  }

  removeAnimal(index: number) {
    this.control.removeAt(index);
  }

  selectAnimal(animal: Animal) {
    const index = this.control.value.indexOf(animal);
    if (!!~index) {
      this.removeAnimal(index);
    } else {
      this.addAnimal(animal);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}
