import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector6Page } from './selector6.page';

describe('Selector6Page', () => {
  let component: Selector6Page;
  let fixture: ComponentFixture<Selector6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
