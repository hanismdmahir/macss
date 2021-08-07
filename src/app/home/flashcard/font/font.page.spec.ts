import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontPage } from './font.page';

describe('FontPage', () => {
  let component: FontPage;
  let fixture: ComponentFixture<FontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
