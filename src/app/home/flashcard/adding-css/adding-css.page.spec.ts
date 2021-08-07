import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCSSPage } from './adding-css.page';

describe('AddingCSSPage', () => {
  let component: AddingCSSPage;
  let fixture: ComponentFixture<AddingCSSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingCSSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingCSSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
