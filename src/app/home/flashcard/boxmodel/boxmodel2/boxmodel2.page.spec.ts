import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxmodel2Page } from './boxmodel2.page';

describe('Boxmodel2Page', () => {
  let component: Boxmodel2Page;
  let fixture: ComponentFixture<Boxmodel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxmodel2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxmodel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
