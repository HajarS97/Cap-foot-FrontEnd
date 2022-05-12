import { Component, OnInit } from '@angular/core';
import { Match } from '../../models/match.module';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  matchs : Match[] = [];

  constructor(private matchService :MatchService) { }

  ngOnInit(): void {
    this.getAllMatchs();
  }

  getAllMatchs(){
    this.matchService.getMatchs().subscribe(
      (data : Match[]) => {
        this.matchs = data;
      }
    )
  }

}
