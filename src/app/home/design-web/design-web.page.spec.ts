import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWebPage } from './design-web.page';

describe('DesignWebPage', () => {
  let component: DesignWebPage;
  let fixture: ComponentFixture<DesignWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
