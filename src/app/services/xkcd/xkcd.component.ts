import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../xkcd.service';

@Component({
  selector: 'app-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {

  imageUrl: string;
  title: string;
  alt: string;
  comic = 327;
  constructor(private xkcdService: XkcdService) { }

  ngOnInit() {
    this.getXKCD();
  }

  getImageUrl() {
    return this.imageUrl;
  }

  getXKCD() {
    this.xkcdService.getArticle(this.comic).subscribe(data => {
      console.log(data);
      this.imageUrl = data.img;
      this.title = data.title;
      this.alt = data.alt;
    });
  }

}
