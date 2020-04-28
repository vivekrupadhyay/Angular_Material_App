import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobDetailsComponent } from './addjob-details.component';

describe('AddjobDetailsComponent', () => {
  let component: AddjobDetailsComponent;
  let fixture: ComponentFixture<AddjobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
