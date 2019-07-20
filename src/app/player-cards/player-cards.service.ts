import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPlayerCard } from '../shared/player-cards/player-card';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlayerCardsService {
    constructor(private db: AngularFirestore) {}

    getPlayerCards(): Observable<IPlayerCard[]> {
        return this.db.collection('player-cards').valueChanges() as Observable<IPlayerCard[]>;
    }

    getPlayerCardsWithMeta(): Observable<IPlayerCard[]> {
        return this.db
            .collection('player-cards')
            .snapshotChanges()
            .pipe(
                map((doc) => {
                    return doc.map((ele) => {
                        return {
                            id: ele.payload.doc.id,
                            ...ele.payload.doc.data()
                        };
                    }) as IPlayerCard[];
                })
            );
    }

    savePlayerCard(playerCard: IPlayerCard) {
        return this.db.collection('player-cards').add(playerCard);
    }

    updatePlayerCard(playerCard: IPlayerCard) {
        if (playerCard.id) {
            return this.db.doc<IPlayerCard>(`player-cards/${playerCard.id}`).update(playerCard);
        } else {
            throw Error('Player Info with id undefined');
        }
    }
}
