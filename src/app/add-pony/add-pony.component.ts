import { Component, OnInit } from '@angular/core';
import { Pony } from '../pony';
import { PonyServiceService } from '../pony-service.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-add-pony',
    templateUrl: './add-pony.component.html',
    styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {
    model: Pony;
    msgs: Message[] = [];

    constructor(private PonyService: PonyServiceService, private messageService: MessageService) { 
        this.model = new Pony("", "", 0);
    }

    ngOnInit() {}

    onSubmit() {
        this.PonyService.addPony(this.model);
        this.showSuccess();
        this.model = new Pony("", "", 0);
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
