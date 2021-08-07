import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Font3ansPage } from './font3ans.page';

describe('Font3ansPage', () => {
  let component: Font3ansPage;
  let fixture: ComponentFixture<Font3ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Font3ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Font3ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
