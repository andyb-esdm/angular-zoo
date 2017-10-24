import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example/code-example.component';
import { CodeDirective } from './code.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodeExampleComponent, CodeDirective],
  exports: [
    CodeExampleComponent,
    CodeDirective
  ]
})
export class SharedModule { }
