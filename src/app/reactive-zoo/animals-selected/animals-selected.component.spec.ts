import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsSelectedComponent } from './animals-selected.component';

describe('AnimalsSelectedComponent', () => {
  let component: AnimalsSelectedComponent;
  let fixture: ComponentFixture<AnimalsSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
