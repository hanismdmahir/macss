import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text3ansPage } from './text3ans.page';

describe('Text3ansPage', () => {
  let component: Text3ansPage;
  let fixture: ComponentFixture<Text3ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text3ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text3ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
