import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { addChampionComponent } from './addChampion/addChampion.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { MatchComponent } from './match/match.component';
import { SuperviserComponent } from './match/superviser/superviser.component';
import { AddTeamComponent } from './add-team/add-team.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'match/superviser/:id',
				component: SuperviserComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'match',
				component: MatchComponent
      },
      {
				path: 'addChampion',
				component: addChampionComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			}
		]
	}
];
