import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Race } from './race';
import { RACES } from './mock-races';

@Injectable()
export class RaceService {
    myRaces = new Array<Race>();
    constructor() {
        this.myRaces = RACES;
    }
    getRaces(): Observable<Race[]> {
        return of(this.myRaces);
    }
    addRace(race: Race) {
        this.myRaces.push(race);
    }
}
