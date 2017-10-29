import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enclosure-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './enclosure-name.component.html',
  styleUrls: ['./enclosure-name.component.css']
})
export class EnclosureNameComponent implements OnInit {

  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }

}
