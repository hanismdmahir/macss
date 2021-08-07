import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxmodel1Page } from './boxmodel1.page';

describe('Boxmodel1Page', () => {
  let component: Boxmodel1Page;
  let fixture: ComponentFixture<Boxmodel1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boxmodel1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boxmodel1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
