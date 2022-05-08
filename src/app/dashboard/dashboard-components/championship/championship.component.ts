import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../services/notifications.service';
import { Champion } from '../../../models/champion.model';
import { ChampionShipService } from '../../../services/champion-ship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {
  
champions?:Champion[];
showModal : Boolean = false;
displayStyle = "none";
idToDelete?: number;
inProgress?:boolean;

  constructor(private championshipService: ChampionShipService,
              private notification:NotificationsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllChampions();
    console.log("id", this.showModal);
  }

  getAllChampions(): void{
    this.championshipService.getChampions()
    .subscribe({
      next: (data) => {
        this.champions = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  
  toggleEditable(inProgress:boolean){ 
    console.log("inProgress : ", inProgress);
  }

  openModal(id:number){
    this.showModal=true;
    console.log("id", this.showModal);
 }

 
  
  openPopup(id: number) {
    this.displayStyle = "block";
    this.idToDelete = id;
    console.log("This is id ", id )
  }
  closePopup() {
    this.displayStyle = "none";
  }


  deleteChampionship(id: number){
    this.championshipService.deleteChampionship(id).subscribe({
      next: (data) => {
        this.notification.showError("Tournoi supprimée avec succes","Supression tournoi")
        this.ngOnInit()
        this.closePopup()
      },
      error: (e) => console.error(e)
    });
  }

  goToAddChampion() {
    this.router.navigateByUrl('/component/addChampion');
  };

}
