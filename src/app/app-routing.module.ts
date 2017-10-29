import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ZooAnimalFormComponent } from './zoo-animal-form/zoo-animal-form.component';

import { EnclosureCreatorComponent } from './reactive-zoo/enclosure-creator/enclosure-creator.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'zoo-animal-form', component: ZooAnimalFormComponent },
  { path: 'enclosure-creator', component: EnclosureCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
