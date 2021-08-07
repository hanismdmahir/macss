import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font1Page } from './font1.page';

describe('Font1Page', () => {
  let component: Font1Page;
  let fixture: ComponentFixture<Font1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
