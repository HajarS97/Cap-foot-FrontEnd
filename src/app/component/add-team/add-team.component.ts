import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model'; 
import { TeamService } from  '../../services/team.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styles: [`
  .alert-custom {
    color: #cc4dd5;
    background-color: #f0c4f3;
    border-color: #f0c4f3;
  }
  .submit-form {
    max-width: 500px;
    margin: auto;
  }
`]
})
export class AddTeamComponent implements OnInit {

  constructor(private teamservice: TeamService, private playerservice: PlayerService) { }

  public players: Player[] =
  [
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: true,
      captain: true,
      available: true
    },
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: true,
      captain: false,
      available: true
    },
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: true,
      captain: false,
      available: true
    },
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: true,
      captain: false,
      available: true
    },
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: true,
      captain: false,
      available: true
    },
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: false,
      captain: false,
      available: true
    },
    {
      fullName: '',
      emailAddress: '',
      cin: '',
      phone: '',
      startingPlayer: false,
      captain: false,
      available: true
    },
  ];
  public team: Team[] = [
    {
      name: '',
      site: '',
      stage:"",
      players: []
    }
  ];

  public allPlayers: Player[] = [];

  fields: any = ['Joueur Titulaire 1 (Capitain)', 'Joueur Titulaire 2', 'Joueur Titulaire 3', 'Joueur Titulaire 4', 'Joueur Titulaire 5','Joueur Remplaçant 1','Joueur Remplaçant 2'];
  
  emails_check: any[] = [];
  cin_check: any[] = [];
  phone_check: any[] = [];

  valid: boolean = true;

  ngOnInit(): void {
    this.getAllPlayers();
  }

  
  
  public onAddTeam(): void {
    console.log("test");
    this.team[0].players = this.players;
    this.teamservice.createTeam(this.team[0]).subscribe();
    console.log(this.team[0]);
    
  }

  public getAllPlayers()
  {
      this.playerservice.getPlayers().subscribe( 
        (data : Player[]) => {
          this.allPlayers = data;
          for(let p of this.allPlayers)
          {
            this.emails_check.push(p.emailAddress);
            this.cin_check.push(p.cin);
            this.phone_check.push(p.phone)
          }
          console.log(this.emails_check);
          console.log(data)
        }
      )
    }
  }





