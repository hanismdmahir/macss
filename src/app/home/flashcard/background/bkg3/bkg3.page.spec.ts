import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg3Page } from './bkg3.page';

describe('Bkg3Page', () => {
  let component: Bkg3Page;
  let fixture: ComponentFixture<Bkg3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
