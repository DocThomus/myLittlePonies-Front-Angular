import { Injectable } from '@angular/core';
import { Pony } from './pony'
import { PONIES } from './mock-ponies'
import { Observable, of } from 'rxjs';
import { convertInjectableProviderToFactory } from '@angular/core/src/di/injectable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PonyServiceService {
    id: number;
    myPonies = new Array<Pony>();
    urlService: string;
    constructor(private http: HttpClient) {
        this.id = 0;
        this.myPonies = PONIES;
        this.urlService = 'http://localhost:8080/myLittlePonies/pony';
    }
    getPonies(): Observable<Pony[]> {
        return this.http.get<Pony[]>(this.urlService+ '/ponies');
    }
    addPony(pony: Pony) {
        return this.http.post(this.urlService, pony, {headers: {'Content-Type': 'application/json' }}).subscribe();
    }

    updatePony(id:number, pony: Pony) { 
        return this.http.post(this.urlService, pony, {params:{id:""+id}})
    }
}
