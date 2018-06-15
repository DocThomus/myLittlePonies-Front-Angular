import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                 //api
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';


import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PonyDetailsComponentComponent } from './pony-details-component/pony-details-component.component';
import { PoniesComponentComponent } from './ponies-component/ponies-component.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddUserComponent } from './add-user/add-user.component';


import { RaceService } from './race.service';
import { PonyServiceService } from './pony-service.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UpdatePonyComponent } from './update-pony/update-pony.component';

const appRoutes: Routes = [
    { path: "Ponies", component: PoniesComponentComponent },
    { path: "Races", component: RacesComponent },
    { path: "AddPony", component: AddPonyComponent },
    { path: "AddRace", component: AddCourseComponent },
    { path: "AddUser", component: AddUserComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        PonyDetailsComponentComponent,
        PoniesComponentComponent,
        RaceDetailsComponent,
        RacesComponent,
        AddPonyComponent,
        AddCourseComponent,
        AddUserComponent,
        UpdatePonyComponent
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        NgbModule,
        ButtonModule,
        ListboxModule,
        MessagesModule,
        MessageModule,
        FieldsetModule,
        BrowserAnimationsModule,
        PanelModule,
        CardModule,
        DialogModule
    ],
    providers: [
        PonyServiceService,
        RaceService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
