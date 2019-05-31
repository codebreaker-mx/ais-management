import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPlayerCard } from '../shared/player-cards/player-card';

@Injectable({
    providedIn: 'root'
})
export class PlayerCardsService {
    constructor(private db: AngularFirestore) {}

    getPlayerCards(): Observable<IPlayerCard[]> {
        return this.db.collection('player-cards').valueChanges() as Observable<IPlayerCard[]>;
    }

    savePlayerCard(playerCard: IPlayerCard) {
        return this.db.collection('player-cards').add(playerCard);
    }
}
