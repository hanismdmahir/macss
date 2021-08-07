import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector3ansPage } from './selector3ans.page';

describe('Selector3ansPage', () => {
  let component: Selector3ansPage;
  let fixture: ComponentFixture<Selector3ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selector3ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selector3ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
