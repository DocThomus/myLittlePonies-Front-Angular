import { Component, OnInit, Input } from '@angular/core';
import { PonyServiceService } from '../pony-service.service'
import { Pony } from './../pony'

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies-component.component.html',
  styleUrls: ['./ponies-component.component.css']
})

export class PoniesComponentComponent implements OnInit {
    @Input() myPonies: Array<Pony>;

    constructor(private ponyService: PonyServiceService) { 
        this.ponyService = ponyService;
    }

    ngOnInit() {
        if (this.myPonies == undefined)
            this.ponyService.getPonies().subscribe(ponies => this.myPonies = ponies);
    }
}
