import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebraDetailComponent } from './zebra-detail.component';

describe('ZebraDetailComponent', () => {
  let component: ZebraDetailComponent;
  let fixture: ComponentFixture<ZebraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
