import { Route } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

export const pagesPreLoginRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
];
