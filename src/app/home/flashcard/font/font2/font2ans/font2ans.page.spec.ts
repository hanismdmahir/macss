import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font2ansPage } from './font2ans.page';

describe('Font2ansPage', () => {
  let component: Font2ansPage;
  let fixture: ComponentFixture<Font2ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font2ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font2ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
