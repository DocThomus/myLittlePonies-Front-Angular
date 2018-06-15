import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    @Input() user: User;
    @Output() onSelect = new EventEmitter<string>();
    checkValue: boolean;

    constructor() {}

    ngOnInit() {}

    selectUser() {
        if (this.checkValue) {
            this.onSelect.emit("bonjour " + this.user.name + " " + this.user.prenom);
        }
    }

}

export class User {
    name: string;
    prenom: string;
    constructor(n: string, p: string) {
        this.name = n;
        this.prenom = p;
    }
}

