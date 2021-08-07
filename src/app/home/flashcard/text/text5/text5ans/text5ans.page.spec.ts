import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text5ansPage } from './text5ans.page';

describe('Text5ansPage', () => {
  let component: Text5ansPage;
  let fixture: ComponentFixture<Text5ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text5ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text5ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
