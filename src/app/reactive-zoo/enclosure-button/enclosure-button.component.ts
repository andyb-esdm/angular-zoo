import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enclosure-button',
  templateUrl: './enclosure-button.component.html',
  styleUrls: ['./enclosure-button.component.css']
})
export class EnclosureButtonComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
