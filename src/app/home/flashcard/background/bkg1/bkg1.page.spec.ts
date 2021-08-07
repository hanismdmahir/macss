import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg1Page } from './bkg1.page';

describe('Bkg1Page', () => {
  let component: Bkg1Page;
  let fixture: ComponentFixture<Bkg1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
