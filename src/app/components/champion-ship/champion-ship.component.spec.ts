import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionShipComponent } from './champion-ship.component';

describe('ChampionShipComponent', () => {
  let component: ChampionShipComponent;
  let fixture: ComponentFixture<ChampionShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
