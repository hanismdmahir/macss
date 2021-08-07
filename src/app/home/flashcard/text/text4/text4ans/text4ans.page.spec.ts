import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text4ansPage } from './text4ans.page';

describe('Text4ansPage', () => {
  let component: Text4ansPage;
  let fixture: ComponentFixture<Text4ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text4ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text4ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
