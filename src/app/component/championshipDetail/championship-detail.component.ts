import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../../models/champion.model';
import { ChampionShipService } from '../../services/champion-ship.service';


@Component({
  selector: 'app-ngbd-nav',
  templateUrl: 'championship-detail.component.html',
  styles: [`
    .submit-form {
      max-width: 400px;
      margin: auto;
    }
  `]
})
export class championshipDetailComponent implements OnInit{
 
  submitted = false;
  currentChampion: Champion = {
    label: '',
    startDate: new Date,
    endDate: new Date,
    statut: '',
    progress: false
  };

  message = '';
  etats: any = ['INSCRIPTION', 'GROUPE', 'QUART_FINAL', 'DEMI_FINAL', 'FINAL'];

  constructor(
    private championShipService: ChampionShipService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.message = '';
      this.getChampionShip(this.route.snapshot.params["id"]);
  }

  getChampionShip(id: string): void {
    this.championShipService.getChampion(id)
      .subscribe({
        next: (data) => {
          this.currentChampion = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateChampionShip(): void {
    this.message = '';

    this.championShipService.updateChampion(this.currentChampion)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This ChampionShip was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  

  
}
