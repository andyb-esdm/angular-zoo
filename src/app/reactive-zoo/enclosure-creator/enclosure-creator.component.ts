import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { Enclosure } from '../enclosure';
import { EnclosureService } from '../enclosure.service';


@Component({
  selector: 'app-enclosure-creator',
  templateUrl: './enclosure-creator.component.html',
  styleUrls: ['./enclosure-creator.component.css']
})
export class EnclosureCreatorComponent implements OnInit {

  enclosures$ = this.enclosureService.select<Enclosure[]>('enclosures');
  animals$ = this.enclosureService.select<Animal[]>('animals');
  constructor(private enclosureService: EnclosureService) { }

  ngOnInit() {
  }

  addEnclosure(enclosure: Enclosure) {
    this.enclosureService.addEnclosure(enclosure);
  }

}
