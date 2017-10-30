import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

const dataBindingRoutes: Routes = [
  { path: 'data-binding', component: DataBindingComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'interpolation' },
      { path: 'interpolation', component: InterpolationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataBindingRoutes)
  ],
  declarations: [
    InterpolationComponent,
    DataBindingComponent
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
