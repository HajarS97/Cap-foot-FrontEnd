import { Component, OnInit } from '@angular/core';
import { ChampionShipService } from '../../services/champion-ship.service';
import { Match } from '../../models/match.model';
import { MatchService } from '../../services/match.service';
import { Champion } from '../..//models/champion.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  matchs : Match[] = [];
  champion?:Champion[] = [];

  states = [
    {id:0, name: "PENDING", front:"Match non commencé" },
    {id:1, name: "START",  front: "Début de match"},
    {id:2, name: "HALF" , front: "Mi-Temps"},
    {id:3, name: "END", front:"Fin de match" },
  ];

  constructor(private matchService :MatchService, private championshipService: ChampionShipService) { }

  ngOnInit(): void {
    this.getAllMatchs();
    this.getChampions();
  }

  getAllMatchs(){
    this.matchService.getMatchs().subscribe(
      (data : Match[]) => {
        this.matchs = data;
      }
    )
  }

  getChampions(){
    this.championshipService.getChampions().subscribe((data:Champion[])=>{
      this.champion = data
      console.log(this.champion)
    });
  }

}
