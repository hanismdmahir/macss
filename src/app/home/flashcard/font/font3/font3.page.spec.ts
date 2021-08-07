import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font3Page } from './font3.page';

describe('Font3Page', () => {
  let component: Font3Page;
  let fixture: ComponentFixture<Font3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
