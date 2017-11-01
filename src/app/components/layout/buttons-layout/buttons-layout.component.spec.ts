import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLayoutComponent } from './buttons-layout.component';

describe('ButtonsLayoutComponent', () => {
  let component: ButtonsLayoutComponent;
  let fixture: ComponentFixture<ButtonsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
