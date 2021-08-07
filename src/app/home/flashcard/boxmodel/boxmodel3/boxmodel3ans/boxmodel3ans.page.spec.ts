import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxmodel3ansPage } from './boxmodel3ans.page';

describe('Boxmodel3ansPage', () => {
  let component: Boxmodel3ansPage;
  let fixture: ComponentFixture<Boxmodel3ansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxmodel3ansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxmodel3ansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
