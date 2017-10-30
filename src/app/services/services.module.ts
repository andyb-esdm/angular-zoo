import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { XkcdComponent } from './xkcd/xkcd.component';
import { XkcdService } from './xkcd.service';

const servicesRoutes: Routes = [
  { path: 'services', component: XkcdComponent }
];

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    FormsModule,
    RouterModule.forChild(servicesRoutes)
  ],
  declarations: [
    XkcdComponent
  ],
  providers: [XkcdService]
})
export class ServicesModule { }
