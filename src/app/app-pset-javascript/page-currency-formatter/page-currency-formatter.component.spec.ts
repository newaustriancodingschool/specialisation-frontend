import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCurrencyFormatterComponent } from './page-currency-formatter.component';

describe('PageCurrencyFormatterComponent', () => {
  let component: PageCurrencyFormatterComponent;
  let fixture: ComponentFixture<PageCurrencyFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCurrencyFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCurrencyFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
