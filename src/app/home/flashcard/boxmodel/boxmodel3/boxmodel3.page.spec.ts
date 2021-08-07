import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxmodel3Page } from './boxmodel3.page';

describe('Boxmodel3Page', () => {
  let component: Boxmodel3Page;
  let fixture: ComponentFixture<Boxmodel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxmodel3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxmodel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
