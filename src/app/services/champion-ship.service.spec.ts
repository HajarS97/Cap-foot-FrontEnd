import { TestBed } from '@angular/core/testing';

import { ChampionShipService } from './champion-ship.service';

describe('ChampionShipService', () => {
  let service: ChampionShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
