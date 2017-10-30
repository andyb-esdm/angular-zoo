import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
const ngxModules = [
  BsDropdownModule.forRoot(),
  CollapseModule.forRoot(),
  ModalModule.forRoot()
];
import { BsModalService } from 'ngx-bootstrap/modal';

import { SharedModule } from './shared/shared.module';
import { ReactiveZooModule } from './reactive-zoo/reactive-zoo.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ZooAnimalFormComponent } from './zoo-animal-form/zoo-animal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ZooAnimalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ...ngxModules,
    SharedModule,
    DataBindingModule,
    ReactiveZooModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
