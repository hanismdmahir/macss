import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg2Page } from './bkg2.page';

describe('Bkg2Page', () => {
  let component: Bkg2Page;
  let fixture: ComponentFixture<Bkg2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
