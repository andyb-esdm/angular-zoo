import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/operators/map';

@Injectable()
export class XkcdService {

  constructor(private jsonp: Jsonp) { }

  getArticle(i: number) {
    const url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/' + i + '?callback=JSONP_CALLBACK';

    return this.jsonp.get(url).map((res) => res.json());
  }
}
