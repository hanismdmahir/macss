import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font4Page } from './font4.page';

describe('Font4Page', () => {
  let component: Font4Page;
  let fixture: ComponentFixture<Font4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
