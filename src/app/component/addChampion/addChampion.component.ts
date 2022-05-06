import { Component, OnInit } from '@angular/core';
import { Champion } from '../../models/champion.model';
import { ChampionShipService } from '../../services/champion-ship.service';


@Component({
  selector: 'app-ngbd-alert',
  templateUrl: 'addChampion.component.html',
  styles: [`
    .alert-custom {
      color: #cc4dd5;
      background-color: #f0c4f3;
      border-color: #f0c4f3;
    }
    .submit-form {
      max-width: 400px;
      margin: auto;
    }
  `]
})
export class addChampionComponent implements OnInit {

  champion: Champion = {
    label: '',
    startDate: new Date,
    endDate: new Date,
    statut: '',
    progress: false
  };
  submitted = false;
  etats: any = ['INSCRIPTION', 'GROUPE', 'QUART_FINAL', 'DEMI_FINAL', 'FINAL'];
  constructor(private championService: ChampionShipService) {}

  ngOnInit(): void {
  }

  saveChampion(): void {
    const data = {
      label: this.champion.label,
      startDate: this.champion.startDate,
      endDate: this.champion.endDate,
      statut: this.champion.statut,
      progress: this.champion.progress,
    };
    this.championService.createChampion(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newChampion(): void {
    this.submitted = false;
    this.champion = {
      label: '',
      startDate: new Date,
      endDate: new Date,
      statut: '',
      progress: false
    };
  }


}

