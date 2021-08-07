import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkg5ansPage } from './bkg5ans.page';

describe('Bkg5ansPage', () => {
  let component: Bkg5ansPage;
  let fixture: ComponentFixture<Bkg5ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bkg5ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bkg5ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
