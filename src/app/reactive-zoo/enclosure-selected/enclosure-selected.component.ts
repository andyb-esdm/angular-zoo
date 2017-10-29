import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../animal';

@Component({
  selector: 'app-enclosure-selected',
  templateUrl: './enclosure-selected.component.html',
  styleUrls: ['./enclosure-selected.component.css']
})
export class EnclosureSelectedComponent implements OnInit {
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
