import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaArticleComponent } from './wikipedia-article.component';

describe('WikipediaArticleComponent', () => {
  let component: WikipediaArticleComponent;
  let fixture: ComponentFixture<WikipediaArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
