import { TestBed } from '@angular/core/testing';

import { TrainersStateService } from './trainers-state.service';

describe('TrainersStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainersStateService = TestBed.get(TrainersStateService);
    expect(service).toBeTruthy();
  });
});
