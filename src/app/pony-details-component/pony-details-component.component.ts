import { Component, OnInit, Input } from '@angular/core';
import { Pony } from './../pony'

@Component({
    selector: 'app-pony-details',
    templateUrl: './pony-details-component.component.html',
    styleUrls: ['./pony-details-component.component.css']
})
export class PonyDetailsComponentComponent implements OnInit {
    @Input() pony: Pony;


    constructor() { }

    ngOnInit() {
    }

}
