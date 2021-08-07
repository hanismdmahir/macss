import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcss1Page } from './addcss1.page';

describe('Addcss1Page', () => {
  let component: Addcss1Page;
  let fixture: ComponentFixture<Addcss1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addcss1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addcss1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
