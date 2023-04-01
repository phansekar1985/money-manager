import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@money-manager/pages/pre-login').then(
        (module) => module.PagesPreLoginModule
      ),
  },
];
