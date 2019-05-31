import { Component, OnInit, Input } from '@angular/core';
import { IPlayerCard } from 'src/app/shared/player-cards/player-card';

@Component({
    selector: 'app-card-thumbnail',
    templateUrl: './card-thumbnail.component.html',
    styles: []
})
export class CardThumbnailComponent implements OnInit {
    @Input() playerInfo: IPlayerCard;

    constructor() {}

    ngOnInit() {}
}
