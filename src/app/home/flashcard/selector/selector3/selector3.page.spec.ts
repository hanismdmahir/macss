import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector3Page } from './selector3.page';

describe('Selector3Page', () => {
  let component: Selector3Page;
  let fixture: ComponentFixture<Selector3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
