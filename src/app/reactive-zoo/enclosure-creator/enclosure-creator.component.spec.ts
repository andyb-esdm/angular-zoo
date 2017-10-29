import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureCreatorComponent } from './enclosure-creator.component';

describe('EnclosureCreatorComponent', () => {
  let component: EnclosureCreatorComponent;
  let fixture: ComponentFixture<EnclosureCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
