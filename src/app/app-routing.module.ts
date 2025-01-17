import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GroupComponent } from './navBar/group/group.component';
import { MatchComponent } from './navBar/match/match.component';
import { NavBarComponent } from './navBar/navBar.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { InscriptionComponent } from './component/inscription/inscription.component';

export const Approutes: Routes = [
  {
    path: 'inscription',
    component: AddTeamComponent
  },
  {
    path: 'insc',
    component: InscriptionComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path:'navBar',
    component : NavBarComponent
  },
  {
    path:'match',
    component : MatchComponent
  },
  {
    path:'group',
    component : GroupComponent
  },

  {
    path: '',
    component: FullComponent,
    children: [


      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
