import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Champion } from '../models/champion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionShipService {
  public host:string="http://localhost:8082"

  constructor(private http:HttpClient) { }

  getChampions(): Observable<Champion[]>{
    let apiChampion = this.host+"/api/v1/admin/championships/getall";
    return this.http.get<Champion[]>(apiChampion);
  }
}
