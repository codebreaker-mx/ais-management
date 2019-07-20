import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/internal/operators/take';
import { TeamCardComponent } from '../team-card/team-card.component';
import { TeamsService } from '../teams.service';
import { ITeamCard } from '../team-card';

@Component({
    selector: 'app-team-cards-list',
    templateUrl: './team-cards-list.component.html',
    styles: []
})
export class TeamCardsListComponent {
    items: Observable<ITeamCard[]>;
    dialogRef: MatDialogRef<TeamCardComponent>;

    constructor(private teamsService: TeamsService, private dialog: MatDialog) {
        this.items = this.teamsService.getTeamsWithMeta();
    }

    addTeam() {
        this.dialogRef = this.dialog.open(TeamCardComponent);
        this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((teamDocRef) => {
            if (teamDocRef) {
                this.dialogRef.close();
            }
        });
    }

    editTeam(teamInfo) {
        this.dialogRef = this.dialog.open(TeamCardComponent);
        this.dialogRef.componentInstance.teamInfo = teamInfo;
        this.dialogRef.componentInstance.newTeam = false;
        this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((teamDocRef) => {
            if (teamDocRef) {
                this.dialogRef.close();
            }
        });
    }
}
