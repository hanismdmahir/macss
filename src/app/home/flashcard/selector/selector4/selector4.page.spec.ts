import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector4Page } from './selector4.page';

describe('Selector4Page', () => {
  let component: Selector4Page;
  let fixture: ComponentFixture<Selector4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
