import { Component, OnInit } from '@angular/core';
import { Champion } from '../../../models/champion.model';
import { ChampionShipService } from '../../../services/champion-ship.service';
//import { ChampionShipService } from '../../services/champion-ship.service';
//import { Champion } from '../../models/champion.model';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  

  champions?: Champion[];
  constructor(private championService: ChampionShipService) { }

  ngOnInit(): void {
    this.getAllChampions();
  }

  getAllChampions(): void{
    this.championService.getChampions()
    .subscribe({
      next: (data) => {
        this.champions = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
