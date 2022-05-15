import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from '../../../models/match.model';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-superviser',
  templateUrl: './superviser.component.html',
  styleUrls: ['./superviser.component.css']
})
export class SuperviserComponent implements OnInit {
  match: Match  = {
    id: 0,
    stage: "",
    matchDate: new Date(),
    site: '',
    scoreHome: 0,
    scoreAway: 0,
    matchState: "match non commencé",
    teamHome: {
      id: 0,
      name: "",
      site: "",
      stage: "",
      players: []

    },
    teamAway: {
      id: 0,
      name: "",
      site: "",
      stage: "",
      players: []

    } 

    
  };

  states = [
    {name: "PEDING", front:"Match Non Commencé" },
    {name: "START",  front: "Début de Match"},
    {name: "HALF" , front: "Entre Mi-Temps"},
    {name: "END", front:"Fin de Match" },
  ];

   private id: number = 0;
  constructor(private matchService: MatchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getMatchById(this.id);
  }

  getMatchById(id: number){
    this.matchService.getMatchById(id).subscribe(
      (data: Match) => {
        this.match = data;
        //console.log(this.match)
      }
    )
  }

  updateScore(id:number, match: Match){
      this.matchService.updateMatchScore(id, match).subscribe();
      console.log(match)
      console.log(id)
      this.router.navigateByUrl('component/match');
  }
}
