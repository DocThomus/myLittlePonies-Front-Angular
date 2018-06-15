import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent, User } from '../user-details/user-details.component';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    reception: string;
    user: Array<User> = [];
    constructor() { 
        this.user.push(new User("toto", "titi"), new User("querty", "azerty"));
        this.reception = "";
    }

    ngOnInit() {
    }

    onSelectedOnTheParent(roro: string) {
        this.reception += roro + " ";
    }

}
