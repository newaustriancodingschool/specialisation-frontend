import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestComponent } from './page-test.component';

describe('PageTestComponent', () => {
  let component: PageTestComponent;
  let fixture: ComponentFixture<PageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
