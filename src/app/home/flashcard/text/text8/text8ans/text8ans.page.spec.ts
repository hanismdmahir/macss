import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text8ansPage } from './text8ans.page';

describe('Text8ansPage', () => {
  let component: Text8ansPage;
  let fixture: ComponentFixture<Text8ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text8ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text8ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
