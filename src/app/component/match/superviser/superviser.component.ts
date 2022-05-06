import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from '../../../models/match.module';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-superviser',
  templateUrl: './superviser.component.html',
  styleUrls: ['./superviser.component.scss']
})
export class SuperviserComponent implements OnInit {
  match: Match  = {
    id: 0,
    groupePhase: false,
    directEliminationPhase: false,
    matchDate: new Date(),
    site: '',
    scoreHome: 0,
    scoreAway: 0,
    teamHome: {
      id: 0,
      name: "",
      site: "",
      players_id : 0,
      nbPlayers: 0,
      groupTeam_id: 0

    },
    teamAway: {
      id: 0,
      name: "",
      site: "",
      players_id : 0,
      nbPlayers: 0,
      groupTeam_id: 0

    } 
  };

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
