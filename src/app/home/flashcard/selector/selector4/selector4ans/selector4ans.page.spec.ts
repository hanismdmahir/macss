import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector4ansPage } from './selector4ans.page';

describe('Selector4ansPage', () => {
  let component: Selector4ansPage;
  let fixture: ComponentFixture<Selector4ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector4ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector4ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
