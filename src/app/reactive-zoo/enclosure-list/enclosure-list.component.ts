import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Enclosure } from '../enclosure';

@Component({
  selector: 'app-enclosure-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './enclosure-list.component.html',
  styleUrls: ['./enclosure-list.component.css']
})
export class EnclosureListComponent implements OnInit {
  @Input() enclosures: Enclosure[];
  constructor() { }

  ngOnInit() {
  }

}
