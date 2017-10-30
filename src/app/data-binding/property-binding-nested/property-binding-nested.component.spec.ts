import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingNestedComponent } from './property-binding-nested.component';

describe('PropertyBindingNestedComponent', () => {
  let component: PropertyBindingNestedComponent;
  let fixture: ComponentFixture<PropertyBindingNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
