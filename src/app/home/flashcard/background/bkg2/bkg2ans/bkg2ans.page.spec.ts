import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg2ansPage } from './bkg2ans.page';

describe('Bkg2ansPage', () => {
  let component: Bkg2ansPage;
  let fixture: ComponentFixture<Bkg2ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg2ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg2ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
