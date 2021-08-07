import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text7ansPage } from './text7ans.page';

describe('Text7ansPage', () => {
  let component: Text7ansPage;
  let fixture: ComponentFixture<Text7ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text7ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text7ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
