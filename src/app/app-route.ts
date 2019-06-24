import { Route } from '@angular/router';

export interface IAppRoute extends Route {
    whenAuthenticated?: 'show' | 'hide';
    title?: string;
}