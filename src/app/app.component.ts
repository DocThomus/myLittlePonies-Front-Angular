import { Component } from '@angular/core';
import { Pony } from './pony';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Mon petit poney';
    myPony: Pony = new Pony("rainbow", "blue", 10);
}
