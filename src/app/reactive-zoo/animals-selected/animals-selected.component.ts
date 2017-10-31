import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-selected',
  templateUrl: './animals-selected.component.html',
  styleUrls: ['./animals-selected.component.css']
})
export class AnimalsSelectedComponent implements OnInit {
  @Input() parent: FormGroup;

  @Input() selected: Animal[];

  @Output() remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }

  constructor() { }

  ngOnInit() {
  }

}
