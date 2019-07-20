import { ITeamCard } from './team-card';

export class TeamCardFactory {
    static createEmptyPlayerCard(): ITeamCard {
        return {
            name: '',
            logo: ''
        };
    }
}
