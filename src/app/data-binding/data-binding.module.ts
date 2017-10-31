import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { PropertyBindingNestedComponent } from './property-binding-nested/property-binding-nested.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ZebraDetailComponent } from './zebra-detail/zebra-detail.component';

const dataBindingRoutes: Routes = [
  { path: 'data-binding', component: DataBindingComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'interpolation' },
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'property-binding', component: PropertyBindingComponent },
      { path: 'property-binding-nested', component: PropertyBindingNestedComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'structural-directives', component: StructuralDirectivesComponent },
      { path: 'two-way-binding', component: TwoWayBindingComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(dataBindingRoutes),
    SharedModule
  ],
  declarations: [
    InterpolationComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    AnimalDetailComponent,
    PropertyBindingNestedComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ZebraDetailComponent
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
