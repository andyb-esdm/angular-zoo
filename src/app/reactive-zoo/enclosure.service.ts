import { Injectable } from '@angular/core';

import { Animal } from './animal';
import { Enclosure } from './enclosure';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  enclosures: Enclosure[];
  animals: Animal[];
}

const state: State = {
  enclosures: [
    { name: 'Big Cats', animals: ['Cheetah', 'Leopard', 'Lion'] },
    { name: 'Paddock', animals: ['Ostrich', 'Gazelle', 'Rhinoceros'] }
  ],
  animals: [
    'Aardvark', 'Black Bear', 'Cheetah', 'Gazelle', 'Gorilla', 'Komodo Dragon', 'Leopard', 'Lion',
    'Ostrich', 'Otter', 'Red Panda', 'Rhinoceros', 'Tiger', 'Wallaby'
  ]
};

@Injectable()
export class EnclosureService {
  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().distinctUntilChanged();

  constructor() { }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  addEnclosure(enclosure: Enclosure) {
    const value = this.subject.value;
    this.subject.next({ ...value, enclosures: [...value.enclosures, enclosure] });
  }
}
