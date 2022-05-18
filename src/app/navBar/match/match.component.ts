import { Component, OnInit } from '@angular/core';
import { ChampionShipService } from '../../services/champion-ship.service';
import { Match } from '../../models/match.model';
import { MatchService } from '../../services/match.service';
import { Champion } from '../..//models/champion.model';
import { Group } from '../../models/group.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from '..//../services/group.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  matchs: Match[] = [];
  champion?:Champion[] = [];
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
    {id:0, name: "PENDING", front:"Match non commencé" },
    {id:1, name: "START",  front: "Début de match"},
    {id:2, name: "HALF" , front: "Mi-Temps"},
    {id:3, name: "END", front:"Fin de match" },
  ];

  groups : Group[] = []; 
  chunk : Group[] = [];
  groupA : Group[] = []; 
  groupB : Group[] = []; 
  groupC : Group[] = []; 
  groupD : Group[] = [];
  groupE : Group[] = []; 
  groupF : Group[] = []; 
  groupG : Group[] = []; 
  groupH : Group[] = []; 


  stateIndex: number = 0;
  state: string = "";
  closeResult = '';


  constructor(private matchService: MatchService, 
    private championshipService: ChampionShipService,
    private modalService: NgbModal,
    private groupService : GroupService) { }

  ngOnInit(): void {
    this.getAllMatch();
    this.getChampions();
    this.getGroups();
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
    this.matchService.getMatchById(id).subscribe((data:Match) => {
      this.match = data;
    })
    console.log("superviser")
  }

  open(content:any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  updateMatch(id:number, match: Match){
    this.matchService.updateMatchScore(id, match).subscribe({
      next:(response)=>{
        console.log(response);
        this.getAllMatch();
      },
    });
    console.log(match)
    console.log(id)
}

getGroups(){
  this.groupService.getGroups().subscribe({
    next:(data)=>{
      this.groups = data
      const chunkSize = 4;
      
      for (let i = 0; i < this.groups.length; i += chunkSize) {
        switch(i) {
          case 0:
            this.groupA = this.groups.slice(i, i + chunkSize);
            console.log("A", this.groupA);
          
            break;
          case 4:
            this.groupB = this.groups.slice(i, i + chunkSize);
            console.log("A", this.groupB);
            break;
          case 8:
            this.groupC = this.groups.slice(i, i + chunkSize);
            console.log("A", this.groupC);
            break;
          case 12:
            this.groupD = this.groups.slice(i, i + chunkSize);
            
            break;
          case 16:
            this.groupE = this.groups.slice(i, i + chunkSize);
          
            break;
          case 20:
            this.groupF = this.groups.slice(i, i + chunkSize);
            
            break;
          case 24:
            this.groupG = this.groups.slice(i, i + chunkSize);
           
            break;
          case 28:
            this.groupH = this.groups.slice(i, i + chunkSize);
            
            break;
       }
       
     // this.chunk = this.groups.slice(i, i + chunkSize);
      } 

    
    }
  });
}

}
