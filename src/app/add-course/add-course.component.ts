import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { Pony } from '../pony';
import { PonyServiceService } from '../pony-service.service';

import { ButtonModule } from 'primeng/button';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
    model: Race;
    ponies: Array<Pony>;
    msgs: Message[] = [];

    constructor(private raceService: RaceService, private ponyService: PonyServiceService, private messageService: MessageService) {
        this.model = new Race("", new Date, []);
    }

    ngOnInit() {
        this.ponyService.getPonies().subscribe(ponies => this.ponies = ponies);
    }

    onSubmit() {
        this.raceService.addRace(this.model);
        this.showSuccess();
        this.model = new Race("", new Date, []);
    }

    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Race added Successfully', detail: 'Order submitted' });
    }

    showError() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }
}
