import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestbookpublishedComponent } from './latestbookpublished.component';

describe('LatestbookpublishedComponent', () => {
  let component: LatestbookpublishedComponent;
  let fixture: ComponentFixture<LatestbookpublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestbookpublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestbookpublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
