import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EnclosureCreatorComponent } from './enclosure-creator/enclosure-creator.component';
import { EnclosureButtonComponent } from './enclosure-button/enclosure-button.component';
import { EnclosureFormComponent } from './enclosure-form/enclosure-form.component';
import { EnclosureNameComponent } from './enclosure-name/enclosure-name.component';
import { AnimalsSelectedComponent } from './animals-selected/animals-selected.component';
import { AnimalsSelectorComponent } from './animals-selector/animals-selector.component';
import { EnclosureListComponent } from './enclosure-list/enclosure-list.component';
import { EnclosureService } from './enclosure.service';
import { JoinPipe } from './join.pipe';

/*
  Based on Todd Motto's article: https://toddmotto.com/component-architecture-reactive-forms-angular#component-architecture
*/
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EnclosureCreatorComponent,
    EnclosureButtonComponent,
    EnclosureFormComponent,
    EnclosureNameComponent,
    AnimalsSelectedComponent,
    AnimalsSelectorComponent,
    EnclosureListComponent,
    JoinPipe
  ],
  exports: [
    EnclosureCreatorComponent
  ],
  providers: [
    EnclosureService
  ]
})
export class ReactiveZooModule { }
