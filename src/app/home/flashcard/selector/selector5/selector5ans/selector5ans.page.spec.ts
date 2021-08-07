import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector5ansPage } from './selector5ans.page';

describe('Selector5ansPage', () => {
  let component: Selector5ansPage;
  let fixture: ComponentFixture<Selector5ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector5ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector5ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
