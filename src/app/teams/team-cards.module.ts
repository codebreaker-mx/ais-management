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
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamCardsListComponent } from './team-cards-list/team-cards-list.component';

@NgModule({
    declarations: [TeamCardsListComponent, TeamCardComponent],
    entryComponents: [TeamCardComponent],
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
        RouterModule.forChild([{ path: '', component: TeamCardsListComponent }])
    ]
})
export class TeamCardsModule {}
