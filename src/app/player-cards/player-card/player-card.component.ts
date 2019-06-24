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
    @Input() newPlayer = true;
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
        // Update
        if(!this.newPlayer && this.playerInfo) {
            const playerUpdated = {
                id: this.playerInfo.id,
                ...this.playerCardFG.value
            };
            this.playerCardsService.updatePlayerCard(playerUpdated).then(() => this.save.emit(playerUpdated))
              .catch(() => console.log('Promise Rejected'));
        } else {
        this.playerCardsService
            .savePlayerCard(this.playerCardFG.value)
            .then((docRef) => this.save.emit(docRef))
            .catch(() => console.log('Promise Rejected'));
        }
    }
}
