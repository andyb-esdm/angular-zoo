import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { CodeDirective } from '../code.directive';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit {
  @ContentChild(CodeDirective) codeDirective;

  @Input() title: string;
  @Input() description: string;
  code: string;
  constructor() { }

  ngOnInit() {
    this.code = this.codeDirective.code;
  }

}
