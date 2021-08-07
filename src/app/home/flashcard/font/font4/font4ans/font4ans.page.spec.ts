import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font4ansPage } from './font4ans.page';

describe('Font4ansPage', () => {
  let component: Font4ansPage;
  let fixture: ComponentFixture<Font4ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font4ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font4ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
