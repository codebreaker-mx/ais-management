import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardsListComponent } from './player-cards-list.component';

describe('PlayerCardsListComponent', () => {
    let component: PlayerCardsListComponent;
    let fixture: ComponentFixture<PlayerCardsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayerCardsListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerCardsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
