import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg6Page } from './bkg6.page';

describe('Bkg6Page', () => {
  let component: Bkg6Page;
  let fixture: ComponentFixture<Bkg6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
