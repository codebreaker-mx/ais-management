import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITeamCard } from './team-card';

@Injectable({
    providedIn: 'root'
})
export class TeamsService {
    constructor(private db: AngularFirestore) {}

    getTeams(): Observable<ITeamCard[]> {
        return this.db.collection('teams').valueChanges() as Observable<ITeamCard[]>;
    }

    getTeamsWithMeta(): Observable<ITeamCard[]> {
        return this.db
            .collection('teams')
            .snapshotChanges()
            .pipe(
                map((doc) => {
                    return doc.map((ele) => {
                        return {
                            id: ele.payload.doc.id,
                            ...ele.payload.doc.data()
                        };
                    }) as ITeamCard[];
                })
            );
    }

    save(teamCard: ITeamCard) {
        return this.db.collection('teams').add(teamCard);
    }

    update(teamCard: ITeamCard) {
        if (teamCard.id) {
            return this.db.doc<ITeamCard>(`teams/${teamCard.id}`).update(teamCard);
        } else {
            throw Error('Info with id undefined');
        }
    }
}
