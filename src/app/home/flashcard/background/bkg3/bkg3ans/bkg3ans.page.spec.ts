import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg3ansPage } from './bkg3ans.page';

describe('Bkg3ansPage', () => {
  let component: Bkg3ansPage;
  let fixture: ComponentFixture<Bkg3ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg3ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg3ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
