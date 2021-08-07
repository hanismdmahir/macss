import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcss2ansPage } from './addcss2ans.page';

describe('Addcss2ansPage', () => {
  let component: Addcss2ansPage;
  let fixture: ComponentFixture<Addcss2ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addcss2ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addcss2ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
