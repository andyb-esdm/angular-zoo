import { Component, TemplateRef } from '@angular/core';
import { Animal } from '../animal';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  aardvark: Animal = {
    name: 'Aardvark',
    description: 'A medium-sized, burrowing, nocturnal mammal native to Africa.',
    imageUrl: '/assets/aardvark.png'
  };

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
