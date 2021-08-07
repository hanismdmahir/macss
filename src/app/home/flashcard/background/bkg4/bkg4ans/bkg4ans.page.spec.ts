import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg4ansPage } from './bkg4ans.page';

describe('Bkg4ansPage', () => {
  let component: Bkg4ansPage;
  let fixture: ComponentFixture<Bkg4ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg4ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg4ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
