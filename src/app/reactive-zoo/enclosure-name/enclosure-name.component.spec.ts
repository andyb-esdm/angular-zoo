import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureNameComponent } from './enclosure-name.component';

describe('EnclosureNameComponent', () => {
  let component: EnclosureNameComponent;
  let fixture: ComponentFixture<EnclosureNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
