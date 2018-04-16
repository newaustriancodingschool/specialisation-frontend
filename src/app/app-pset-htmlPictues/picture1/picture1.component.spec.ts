import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Picture1Component } from './picture1.component';

describe('Picture1Component', () => {
  let component: Picture1Component;
  let fixture: ComponentFixture<Picture1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Picture1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Picture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
