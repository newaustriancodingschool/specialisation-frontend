import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDateFormatterComponent } from './page-date-formatter.component';

describe('PageDateFormatterComponent', () => {
  let component: PageDateFormatterComponent;
  let fixture: ComponentFixture<PageDateFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDateFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDateFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
