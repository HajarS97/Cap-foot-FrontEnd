import { Component, OnInit } from '@angular/core';
import { ChampionShipService } from '../../services/champion-ship.service';
import { Champion } from '../../models/champion.model';


@Component({
  selector: 'app-champion-ship',
  templateUrl: './champion-ship.component.html',
  styleUrls: ['./champion-ship.component.scss']
})
export class ChampionShipComponent implements OnInit {

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
