import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsSelectorComponent } from './animals-selector.component';

describe('AnimalsSelectorComponent', () => {
  let component: AnimalsSelectorComponent;
  let fixture: ComponentFixture<AnimalsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
