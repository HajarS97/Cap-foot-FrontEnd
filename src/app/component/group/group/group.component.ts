import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import {Product,TopSelling, TableRows, Employee} from './table-data';
import { Group } from '../../../models/group.model';
import { TeamService } from '../../../services/team.service';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups : Group[] = []; 
  chunk : Group[] = [];
  groupA : Group[] = []; 
  groupB : Group[] = []; 
  groupC : Group[] = []; 
  groupD : Group[] = [];
  groupE : Group[] = []; 
  groupF : Group[] = []; 
  groupG : Group[] = []; 
  groupH : Group[] = [];   


  constructor(
    private groupService : GroupService,
    private teamService : TeamService
   ) { }

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups(){
    this.groupService.getGroups().subscribe({
      next:(data)=>{
        this.groups = data;
        const chunkSize = 4;
        
        for (let i = 0; i < this.groups.length; i += chunkSize) {
          switch(i) {
            case 0:
              this.groupA = this.groups.slice(i, i + chunkSize);
              this.groupA = this.groupA.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              
            
              break;
            case 4:
              this.groupB = this.groups.slice(i, i + chunkSize);
              this.groupB = this.groupB.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
            case 8:
              this.groupC = this.groups.slice(i, i + chunkSize);
              this.groupC = this.groupC.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
            case 12:
              this.groupD = this.groups.slice(i, i + chunkSize);
              this.groupD = this.groupD.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
            case 16:
              this.groupE = this.groups.slice(i, i + chunkSize);
              this.groupE = this.groupE.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
            case 20:
              this.groupF = this.groups.slice(i, i + chunkSize);
              this.groupF = this.groupF.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
            case 24:
              this.groupG = this.groups.slice(i, i + chunkSize);
              this.groupG = this.groupG.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
            case 28:
              this.groupH = this.groups.slice(i, i + chunkSize);
              this.groupH = this.groupH.sort(function (a, b) {
                return b.cumulPoint - a.cumulPoint;
              });
              break;
         }
         
       // this.chunk = this.groups.slice(i, i + chunkSize);
        } 

      
      }
    });
  }

 getTeam(id:number){
    this.teamService.getTeam(id).subscribe({
      next:(data)=>{
        this.groups.forEach(group =>{
           group.teamName = data.name;
        })
      }
    });
  }

  

}
