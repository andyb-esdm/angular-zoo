import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureButtonComponent } from './enclosure-button.component';

describe('EnclosureButtonComponent', () => {
  let component: EnclosureButtonComponent;
  let fixture: ComponentFixture<EnclosureButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
