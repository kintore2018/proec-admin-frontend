import { TestBed } from '@angular/core/testing';

import { TrainerDetailStateService } from './trainer-detail-state.service';

describe('TrainerDetailStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerDetailStateService = TestBed.get(TrainerDetailStateService);
    expect(service).toBeTruthy();
  });
});
