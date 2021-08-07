import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text2ansPage } from './text2ans.page';

describe('Text2ansPage', () => {
  let component: Text2ansPage;
  let fixture: ComponentFixture<Text2ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text2ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text2ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
