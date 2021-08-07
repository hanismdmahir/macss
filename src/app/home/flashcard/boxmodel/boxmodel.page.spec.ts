import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmodelPage } from './boxmodel.page';

describe('BoxmodelPage', () => {
  let component: BoxmodelPage;
  let fixture: ComponentFixture<BoxmodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxmodelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxmodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
