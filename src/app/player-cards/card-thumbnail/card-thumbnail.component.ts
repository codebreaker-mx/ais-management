import { Component, Input } from '@angular/core';
import { IPlayerCard } from 'src/app/shared/player-cards/player-card';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';


@Component({
    selector: 'app-card-thumbnail',
    templateUrl: './card-thumbnail.component.html',
    styles: []
})
export class CardThumbnailComponent {
    @Input() playerInfo: IPlayerCard;
    dialogRef: MatDialogRef<PlayerCardComponent>;

    constructor(private dialog: MatDialog) {}

    editPlayer() {
        if(this.playerInfo) {
            this.dialogRef = this.dialog.open(PlayerCardComponent);
            this.dialogRef.componentInstance.playerInfo = this.playerInfo;
            this.dialogRef.componentInstance.newPlayer = false;
            this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((playerDocRef) => {
                if (playerDocRef) {
                    this.dialogRef.close();
                }
            });
        }
    }

}
