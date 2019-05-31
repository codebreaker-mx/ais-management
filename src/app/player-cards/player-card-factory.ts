import { IPlayerCard } from '../shared/player-cards/player-card';

export class PlayerCardFactory {
    static createEmptyPlayerCard(): IPlayerCard {
        return {
            name: '',
            nickName: '',
            imgUrl: '',
            description: '',
            cost: 0,
            rate: 0
        };
    }
}
