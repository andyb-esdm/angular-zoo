import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooAnimalFormComponent } from './zoo-animal-form.component';

describe('ZooAnimalFormComponent', () => {
  let component: ZooAnimalFormComponent;
  let fixture: ComponentFixture<ZooAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooAnimalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
