import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg5Page } from './bkg5.page';

describe('Bkg5Page', () => {
  let component: Bkg5Page;
  let fixture: ComponentFixture<Bkg5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
