import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureSelectedComponent } from './enclosure-selected.component';

describe('EnclosureSelectedComponent', () => {
  let component: EnclosureSelectedComponent;
  let fixture: ComponentFixture<EnclosureSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
