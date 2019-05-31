import { TestBed } from '@angular/core/testing';

import { PlayerCardsService } from './player-cards.service';

describe('PlayerCardsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PlayerCardsService = TestBed.get(PlayerCardsService);
        expect(service).toBeTruthy();
    });
});
