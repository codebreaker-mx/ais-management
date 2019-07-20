import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { routes } from './../app-routing.module';
import { BaseComponent } from '../base/base.component';
import { IAppRoute } from '../app-route';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styles: []
})
export class SideNavComponent extends BaseComponent {
    routeList: IAppRoute[];

    constructor(private afAuth: AngularFireAuth) {
        super();
        const subs = this.afAuth.user.subscribe((user) => {
            if (user) {
                this.routeList = routes.filter(
                    (route) => route.whenAuthenticated && route.whenAuthenticated === 'show'
                );
            } else {
                this.routeList = routes.filter(
                    (route) => route.whenAuthenticated && route.whenAuthenticated === 'hide'
                );
            }
        });
        this.unsubscribes.push(subs);
    }
}
