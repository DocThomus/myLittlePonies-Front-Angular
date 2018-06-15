import { Component, OnInit, Input } from '@angular/core';
import { Pony } from '../pony';

@Component({
    selector: 'app-update-pony',
    templateUrl: './update-pony.component.html',
    styleUrls: ['./update-pony.component.css']
})
export class UpdatePonyComponent implements OnInit {
    display: boolean;
    @Input() pony: Pony;

    constructor() { 
        this.display = false;
    }

    ngOnInit() {    

    }    

    openUpdatePanel() {
        console.log("test");
    }

    closeUpdatePanel() {
        this.display = false;
    }

}
