import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {
    constructor(public afAuth: AngularFireAuth, private activatedRoute: ActivatedRoute, private router: Router) {
        const data = this.activatedRoute.snapshot.data;
        if (data.logout) {
            this.logout();
        }
    }

    loginWithGoogle() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((user) => {
            if (user) {
                this.router.navigate(['/']);
            }
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
