import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector1Page } from './selector1.page';

describe('Selector1Page', () => {
  let component: Selector1Page;
  let fixture: ComponentFixture<Selector1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
