import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CodeExampleComponent } from './code-example/code-example.component';
import { CodeDirective } from './code.directive';
import { CollapseCardComponent } from './collapse-card/collapse-card.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule
  ],
  declarations: [
    CodeExampleComponent,
    CodeDirective,
    CollapseCardComponent
  ],
  exports: [
    CodeExampleComponent,
    CodeDirective,
    CollapseCardComponent
  ]
})
export class SharedModule { }
