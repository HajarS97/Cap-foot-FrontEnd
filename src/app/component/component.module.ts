import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { addChampionComponent } from './addChampion/addChampion.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { championshipDetailComponent } from './championshipDetail/championship-detail.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { MatchComponent } from './match/match.component';
import { SuperviserComponent } from './match/superviser/superviser.component';
import { GroupComponent } from './group/group/group.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  
  declarations: [
    NgbdpaginationBasicComponent,
    addChampionComponent,
    NgbdDropdownBasicComponent,
    championshipDetailComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
    MatchComponent,
    SuperviserComponent,
    GroupComponent
  ]
})
export class ComponentsModule { }
