import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg6ansPage } from './bkg6ans.page';

describe('Bkg6ansPage', () => {
  let component: Bkg6ansPage;
  let fixture: ComponentFixture<Bkg6ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg6ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg6ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
