import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector5Page } from './selector5.page';

describe('Selector5Page', () => {
  let component: Selector5Page;
  let fixture: ComponentFixture<Selector5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
