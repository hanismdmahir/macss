import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector1ansPage } from './selector1ans.page';

describe('Selector1ansPage', () => {
  let component: Selector1ansPage;
  let fixture: ComponentFixture<Selector1ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector1ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector1ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
