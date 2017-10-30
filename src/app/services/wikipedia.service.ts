import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WikipediaService {

  constructor(private httpClient: HttpClient) { }

  getArticle() {
    //const headers = new HttpHeaders().set("Origin", "http://localhost:4200")
    this.httpClient.get('http://xkcd.com/info.0.json?&origin=*').subscribe(data => {
      console.log(JSON.stringify(data));
    })
  }
}
