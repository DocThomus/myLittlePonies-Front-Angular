import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.userForm = this.fb.group({
            name: ['Entre votre nom', Validators.required],
            age: ['Un entier', [Validators.pattern("[0-9]+"), Validators.required]]
        });
    }
}
