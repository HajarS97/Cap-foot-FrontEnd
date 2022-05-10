import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  
  public host:string="http://localhost:8082/api/v1/teams/"

  constructor(private http:HttpClient) { }

  getTeam(id:number): Observable<any>{
    let apiTeams = this.host+id;
    return this.http.get<any>(apiTeams);
  }

}
