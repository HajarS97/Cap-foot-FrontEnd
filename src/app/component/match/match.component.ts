import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  matchs: Match[] = [];

  constructor(private matchService: MatchService, private route: Router) { }

  ngOnInit(): void {
    this.getAllMatch();
  }

  getAllMatch(){
    this.matchService.getMatchs().subscribe( 
      (data : Match[]) => {
        this.matchs = data;
        //console.log(data)
      }
    )
  }

  superviser(id: number){
    this.route.navigateByUrl('component/match/superviser/' + id);
    console.log("superviser")
  }

}
