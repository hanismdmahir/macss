import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg4Page } from './bkg4.page';

describe('Bkg4Page', () => {
  let component: Bkg4Page;
  let fixture: ComponentFixture<Bkg4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
