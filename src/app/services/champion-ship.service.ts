import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Champion } from '../models/champion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionShipService {
  public host:string="http://localhost:8082/api/v1/admin/championships"

  constructor(private http:HttpClient) { }

  getChampions(): Observable<Champion[]>{
    let apiChampions = this.host+"/getall";
    return this.http.get<Champion[]>(apiChampions);
  }

  getChampion(id: any): Observable<Champion>{
    let apiChampion = this.host+`/${id}`;
    console.log(apiChampion);
    return this.http.get<Champion>(apiChampion);
  }

  createChampion(data: any): Observable<any> {
    let addChampion = this.host+"/add";
    return this.http.post(addChampion, data);
  }
  
  updateChampion(data: any): Observable<any> {
    let updateChampion = this.host+"/update";
    return this.http.put(`${updateChampion}`, data);
  }
}
