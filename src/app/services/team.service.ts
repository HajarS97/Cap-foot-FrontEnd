import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { Observable } from 'rxjs';



@Injectable({  providedIn: 'root'})

export class TeamService {  
  public host:string="http://localhost:8082/api/v2/teams"  
  
  constructor(private http:HttpClient) { }  
  
  getTeams(): Observable<Team[]>{
        let apiTeams = "http://localhost:8082/api/v1/teams/all";   
     return this.http.get<Team[]>(apiTeams);  }  
     
  createTeam(data: Team){   
     let addTeam = this.host+"/inscription";   
      return this.http.post(addTeam, data);  }  

      getTeam(id:number): Observable<any>{
        let apiTeams = this.host+id;
        return this.http.get<any>(apiTeams);
      }
}

