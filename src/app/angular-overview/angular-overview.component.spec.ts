import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOverviewComponent } from './angular-overview.component';

describe('AngularOverviewComponent', () => {
  let component: AngularOverviewComponent;
  let fixture: ComponentFixture<AngularOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
