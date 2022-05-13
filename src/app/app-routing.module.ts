import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeamComponent } from './component/add-team/add-team.component';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: 'inscription',
    component: AddTeamComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
