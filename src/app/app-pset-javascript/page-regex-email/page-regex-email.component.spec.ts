import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegexEmailComponent } from './page-regex-email.component';

describe('PageRegexEmailComponent', () => {
  let component: PageRegexEmailComponent;
  let fixture: ComponentFixture<PageRegexEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRegexEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegexEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
