import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportsStatsComponent } from './page-sports-stats.component';

describe('PageSportsStatsComponent', () => {
  let component: PageSportsStatsComponent;
  let fixture: ComponentFixture<PageSportsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
