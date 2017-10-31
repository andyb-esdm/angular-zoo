import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-zebra-detail',
  templateUrl: './zebra-detail.component.html',
  styleUrls: ['./zebra-detail.component.css']
})
export class ZebraDetailComponent implements OnInit {
  @Input() animal: Animal;
  constructor() { }

  ngOnInit() {
  }

}
