import { Component } from '@angular/core';
import { PlayerCardsService } from '../player-cards.service';
import { IPlayerCard } from 'src/app/shared/player-cards/player-card';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { take } from 'rxjs/internal/operators/take';

@Component({
    selector: 'app-player-cards-list',
    templateUrl: './player-cards-list.component.html',
    styles: []
})
export class PlayerCardsListComponent {
    items: Observable<IPlayerCard[]>;
    dialogRef: MatDialogRef<PlayerCardComponent>;

    constructor(private playerCardService: PlayerCardsService, 
                private dialog: MatDialog) {
        this.items = this.playerCardService.getPlayerCardsWithMeta()
    }

    addPlayer() {
        this.dialogRef = this.dialog.open(PlayerCardComponent);
        this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((playerDocRef) => {
            if (playerDocRef) {
                this.dialogRef.close();
            }
        });
    }
}
