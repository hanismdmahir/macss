import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text9ansPage } from './text9ans.page';

describe('Text9ansPage', () => {
  let component: Text9ansPage;
  let fixture: ComponentFixture<Text9ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text9ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text9ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
