import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDateSerialiserComponent } from './page-date-serialiser.component';

describe('PageDateSerialiserComponent', () => {
  let component: PageDateSerialiserComponent;
  let fixture: ComponentFixture<PageDateSerialiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDateSerialiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDateSerialiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
