import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalDetailsComponent } from './edit-animal-details.component';

describe('EditAnimalDetailsComponent', () => {
  let component: EditAnimalDetailsComponent;
  let fixture: ComponentFixture<EditAnimalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
