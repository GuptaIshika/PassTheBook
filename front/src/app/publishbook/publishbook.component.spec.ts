import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishbookComponent } from './publishbook.component';

describe('PublishbookComponent', () => {
  let component: PublishbookComponent;
  let fixture: ComponentFixture<PublishbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
