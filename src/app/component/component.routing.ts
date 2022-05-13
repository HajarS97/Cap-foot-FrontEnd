import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { addChampionComponent } from './addChampion/addChampion.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { championshipDetailComponent } from './championshipDetail/championship-detail.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { MatchComponent } from './match/match.component';
import { SuperviserComponent } from './match/superviser/superviser.component';
import { GroupComponent } from './group/group/group.component';
import { NavBarComponent } from '../navBar/navBar.component';


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
				path: 'championDetail/:id',
				component: championshipDetailComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			},
			{
				path:'groups',
				component:GroupComponent
		
			}
		]
	}
];
