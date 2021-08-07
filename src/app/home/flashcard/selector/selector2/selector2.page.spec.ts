import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector2Page } from './selector2.page';

describe('Selector2Page', () => {
  let component: Selector2Page;
  let fixture: ComponentFixture<Selector2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
