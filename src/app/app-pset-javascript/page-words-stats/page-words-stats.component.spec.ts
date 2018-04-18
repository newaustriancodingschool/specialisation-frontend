import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWordsStatsComponent } from './page-words-stats.component';

describe('PageWordsStatsComponent', () => {
  let component: PageWordsStatsComponent;
  let fixture: ComponentFixture<PageWordsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWordsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWordsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
