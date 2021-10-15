import { Routes } from '@angular/router';
import { CanActivateState } from 'src/guard/can-activate-state';
import { PageResolver } from '../services/page-resolver';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: 'cotizacion',
      component: FlightsSearchComponent,
      // resolve: [PageResolver]
    },
    {
      path: 'module1',
      loadChildren: () => import('../module1/module1.module').then(m => m.Module1Module),
      // canActivate: [CanActivateState]
    },
    {
      path: 'module2',
      loadChildren: () => import('../module2/module2.module').then(m => m.Module2Module),
      // canActivate: [CanActivateState]
    },
    {
      path: 'module3',
      loadChildren: () => import('../module3/module3.module').then(m => m.Module3Module),
      // canActivate: [CanActivateState]
    },
    {
      path: 'module4',
      loadChildren: () => import('../module4/module4.module').then(m => m.Module4Module),
      // canActivate: [CanActivateState]
    },
];
