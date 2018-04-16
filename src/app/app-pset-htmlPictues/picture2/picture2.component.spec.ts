import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Picture2Component } from './picture2.component';

describe('Picture2Component', () => {
  let component: Picture2Component;
  let fixture: ComponentFixture<Picture2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Picture2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Picture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
