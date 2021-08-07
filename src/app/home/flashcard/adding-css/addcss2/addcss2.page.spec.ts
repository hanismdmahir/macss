import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcss2Page } from './addcss2.page';

describe('Addcss2Page', () => {
  let component: Addcss2Page;
  let fixture: ComponentFixture<Addcss2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addcss2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addcss2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
