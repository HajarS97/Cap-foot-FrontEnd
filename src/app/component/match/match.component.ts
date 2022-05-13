import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match.module';
import { Router } from '@angular/router';
import { ChampionShipService } from '../../services/champion-ship.service';
import { Champion } from '../../models/champion.model';
import { ChampionshipComponent } from '../../dashboard/dashboard-components/championship/championship.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  matchs: Match[] = [];
  champion?:Champion[] = [];

  states = [
    {id:0, name: "PENDING", front:"Match non commencé" },
    {id:1, name: "START",  front: "Début de match"},
    {id:2, name: "HALF" , front: "Mi-Temps"},
    {id:3, name: "END", front:"Fin de match" },
  ];
  stateIndex: number = 0;
  state: string = "";

  constructor(private matchService: MatchService, private route: Router, private championshipService: ChampionShipService) { }

  ngOnInit(): void {
    this.getAllMatch();
    this.getChampions();
  }

  getAllMatch(){
    this.matchService.getMatchs().subscribe( 
      (data : Match[]) => {
        this.matchs = data;
        /*data.forEach(element => {
          this.states.forEach(state =>{
            if(element.matchState == state.name)[
                  this.stateIndex = state.id,
                  this.state = state.front
            ]
          })
          
        })*/;
        //console.log(data)
      }
    )
  }
  getChampions(){
    this.championshipService.getChampions().subscribe((data:Champion[])=>{
      this.champion = data
      console.log(this.champion)
    });
  }

  superviser(id: number){
    this.route.navigateByUrl('component/match/superviser/' + id);
    console.log("superviser")
  }



}
