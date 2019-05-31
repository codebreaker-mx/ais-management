import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPlayerCard } from 'src/app/shared/player-cards/player-card';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerCardsService } from '../player-cards.service';

@Component({
    selector: 'app-player-card',
    templateUrl: './player-card.component.html',
    styles: []
})
export class PlayerCardComponent implements OnInit {
    @Input() playerInfo: IPlayerCard;
    @Input() newPlayer = false;
    @Output() save = new EventEmitter();

    playerCardFG = this.fb.group({
        name: ['', Validators.required],
        nickName: ['', Validators.required],
        description: [''],
        imgUrl: [''],
        cost: [0, [Validators.required, Validators.min(100)]],
        rate: [0, [Validators.required, Validators.min(1)]]
    });

    constructor(private fb: FormBuilder, private playerCardsService: PlayerCardsService) {}

    ngOnInit() {
        if (this.playerInfo) {
            this.playerCardFG.patchValue(this.playerInfo);
        }
    }

    savePlayerCard() {
        this.playerCardsService
            .savePlayerCard(this.playerCardFG.value)
            .then((docRef) => this.save.emit(docRef))
            .catch(() => console.log('Promise Rejected'));
    }
}
