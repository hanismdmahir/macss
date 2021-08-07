import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector2ansPage } from './selector2ans.page';

describe('Selector2ansPage', () => {
  let component: Selector2ansPage;
  let fixture: ComponentFixture<Selector2ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector2ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector2ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
