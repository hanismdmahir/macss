import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxmodel2ansPage } from './boxmodel2ans.page';

describe('Boxmodel2ansPage', () => {
  let component: Boxmodel2ansPage;
  let fixture: ComponentFixture<Boxmodel2ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxmodel2ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxmodel2ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
