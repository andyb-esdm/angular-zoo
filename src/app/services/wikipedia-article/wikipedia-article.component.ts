import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wikipedia-article',
  templateUrl: './wikipedia-article.component.html',
  styleUrls: ['./wikipedia-article.component.css']
})
export class WikipediaArticleComponent implements OnInit {

  article: any;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
    this.wikipediaService.getArticle();
  }

}
