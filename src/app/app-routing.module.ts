import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { IAppRoute } from './app-route';

export const routes: IAppRoute[] = [
    { path: '', pathMatch: 'full', redirectTo: 'player-cards' },
    {
        path: 'player-cards',
        loadChildren: './player-cards/player-cards.module#PlayerCardsModule',
        canActivate: [AuthGuard],
        whenAuthenticated: 'show',
        title: 'Player Cards'
    },
    {
        path: 'login',
        component: LoginComponent,
        whenAuthenticated: 'hide',
        title: 'Login'
    },
    {
        path: 'logout',
        component: LoginComponent,
        whenAuthenticated: 'show',
        title: 'Logout',
        data: {
            logout: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
