import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model'; 
import { TeamService } from  '../../services/team.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styles: [`
  .alert-custom {
    color: #cc4dd5;
    background-color: #f0c4f3;
    border-color: #f0c4f3;
  }
  .submit-form {
    max-width: 800px;
    margin: auto;
  }
  
`]
})
export class InscriptionComponent implements OnInit {

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

  fullName : string = "";
  email: string = "";
  cin: string = "";
  phone: string = "";

  public list_players: Player [] = []

  public team: Team[] = [
    {
      name: '',
      site: '',
      stage:"INSCRIPTION",
      players: []
    }
  ];

  public allPlayers: Player[] = [];

  i: number = 0;

  fields: any = ['Joueur Titulaire 1 (Capitain)', 'Joueur Titulaire 2', 'Joueur Titulaire 3', 'Joueur Titulaire 4', 'Joueur Titulaire 5','Joueur Remplaçant 1','Joueur Remplaçant 2'];
  fields2: any = ['T1 (Capitain)', 'T2', 'T3', 'T4', 'T5','R1','R2'];
  emails_check: any[] = [];
  cin_check: any[] = [];
  phone_check: any[] = [];

  valid: boolean = true;

  ngOnInit(): void {
    this.getAllPlayers();
  }

  public onAddPlayer(): void {

    if(this.fullName != "" && this.cin != "" && this.phone != "" && this.cin != "")
    {

    this.players[this.i].fullName = this.fullName;
    this.players[this.i].emailAddress = this.email;
    this.players[this.i].cin = this.cin;
    this.players[this.i].phone = this.phone;
    this.i = this.i + 1;
    let player: Player = {
      fullName : this.fullName,
      emailAddress : this.email,
      cin : this.cin,
      phone: this.phone
    }
    console.log(this.list_players);
    this.list_players.push(player);
    this.fullName = "";
    this.email = "";
    this.cin = "";
    this.phone = "";

  }

  }
  
  public onAddTeam(): void {
    console.log("test");
    console.log(this.team[0].site)
    console.log(this.players);
    
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
