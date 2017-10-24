import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-card',
  templateUrl: './collapse-card.component.html',
  styleUrls: ['./collapse-card.component.css']
})
export class CollapseCardComponent implements OnInit {
  @Input() title = 'Example';
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
