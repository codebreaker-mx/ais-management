import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styles: []
})
export class BaseComponent implements OnDestroy {
    unsubscribes: Subscription[] = new Array();

    constructor() {}

    ngOnDestroy() {
        this.unsubscribes.forEach((sub) => sub.unsubscribe());
    }
}
