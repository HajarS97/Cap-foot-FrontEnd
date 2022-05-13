import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Tableau de bord',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/match',
    title: 'Matchs',
    icon: 'bi bi-card-checklist',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/groups',
    title: 'Groups',
    icon: 'bi bi-list-ol',
    class: '',
    extralink: false,
    submenu: []
  },
  
];
