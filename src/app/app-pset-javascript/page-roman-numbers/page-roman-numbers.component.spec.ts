import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRomanNumbersComponent } from './page-roman-numbers.component';

describe('PageRomanNumbersComponent', () => {
  let component: PageRomanNumbersComponent;
  let fixture: ComponentFixture<PageRomanNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRomanNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRomanNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
