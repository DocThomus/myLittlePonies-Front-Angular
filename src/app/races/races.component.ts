import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
    selector: 'app-races',
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
    myRaces: Race[];

    constructor(private raceService: RaceService) { 
        this.raceService = raceService;
        this.myRaces = [];
    }

    ngOnInit() {
        this.raceService.getRaces().subscribe(races => this.myRaces = races);
    }

}
