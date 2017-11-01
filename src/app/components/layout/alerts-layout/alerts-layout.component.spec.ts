import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsLayoutComponent } from './alerts-layout.component';

describe('AlertsLayoutComponent', () => {
  let component: AlertsLayoutComponent;
  let fixture: ComponentFixture<AlertsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
