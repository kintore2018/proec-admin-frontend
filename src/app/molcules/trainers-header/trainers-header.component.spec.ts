import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersHeaderComponent } from './trainers-header.component';

describe('TrainersHeaderComponent', () => {
  let component: TrainersHeaderComponent;
  let fixture: ComponentFixture<TrainersHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
