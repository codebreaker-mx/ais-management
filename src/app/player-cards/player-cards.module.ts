import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
} from '@angular/material';
import { PlayerCardsListComponent } from './player-cards-list/player-cards-list.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { CardThumbnailComponent } from './card-thumbnail/card-thumbnail.component';

@NgModule({
    declarations: [PlayerCardsListComponent, PlayerCardComponent, CardThumbnailComponent],
    entryComponents: [PlayerCardComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: '', component: PlayerCardsListComponent }])
    ]
})
export class PlayerCardsModule {}
