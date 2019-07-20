import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ITeamCard } from '../team-card';
import { TeamsService } from '../teams.service';

@Component({
    selector: 'app-team-card',
    templateUrl: './team-card.component.html',
    styles: []
})
export class TeamCardComponent implements OnInit {
    @Input() teamInfo: ITeamCard;
    @Input() newTeam = true;
    @Output() save = new EventEmitter();

    teamCardFG = this.fb.group({
        name: ['', Validators.required],
        logo: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private teamCardsService: TeamsService) {}

    ngOnInit() {
        if (this.teamInfo) {
            this.teamCardFG.patchValue(this.teamInfo);
        }
    }

    saveTeamInfo() {
        // Update
        if (!this.newTeam && this.teamInfo) {
            const teamUpdated = {
                id: this.teamInfo.id,
                ...this.teamCardFG.value
            };
            this.teamCardsService
                .update(teamUpdated)
                .then(() => this.save.emit(teamUpdated))
                .catch(() => console.log('Promise Rejected'));
        } else {
            this.teamCardsService
                .save(this.teamCardFG.value)
                .then((docRef) => this.save.emit(docRef))
                .catch(() => console.log('Promise Rejected'));
        }
    }
}
