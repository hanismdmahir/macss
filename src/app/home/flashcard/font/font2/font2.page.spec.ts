import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font2Page } from './font2.page';

describe('Font2Page', () => {
  let component: Font2Page;
  let fixture: ComponentFixture<Font2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
