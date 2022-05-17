import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  public host:string="http://localhost:8082/api/v2/groups/"

  constructor(private http:HttpClient) { }

  getGroups(): Observable<any>{
    let apiGroupsTeams = this.host+"groupsTeams";
    return this.http.get<any[]>(apiGroupsTeams);
  }
}
