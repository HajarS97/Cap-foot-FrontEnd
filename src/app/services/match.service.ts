import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../models/match.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //public host:string="http://localhost:8082"

  constructor(private http:HttpClient) { }

  getMatchs(): Observable<Match[]>{
    return this.http.get<Match[]>("http://localhost:8082/api/v1/admin/matchs/all");
  }

  getMatchById(id: number): Observable<Match>{
    return this.http.get<Match>("http://localhost:8082/api/v1/admin/matchs/" + id);
  }

  updateMatchScore(id: number, match: Match){
    return this.http.put('http://localhost:8082/api/v1/admin/matchs/score/'+id, match)
  }
}
