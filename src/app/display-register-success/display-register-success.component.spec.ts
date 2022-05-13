import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRegisterSuccessComponent } from './display-register-success.component';

describe('DisplayRegisterSuccessComponent', () => {
  let component: DisplayRegisterSuccessComponent;
  let fixture: ComponentFixture<DisplayRegisterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRegisterSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
