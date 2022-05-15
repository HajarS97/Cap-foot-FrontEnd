import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})


export class PlayerService {

  public host:string="http://localhost:8082/api/v2/players"

  constructor(private http:HttpClient) { }

  getPlayers(): Observable<Player[]>{

    let apiPlayers = this.host+"/all";
    return this.http.get<Player[]>(apiPlayers);
  }
    

}
