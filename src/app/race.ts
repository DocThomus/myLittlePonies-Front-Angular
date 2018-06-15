import { Pony } from "./pony";

export class Race {
    city: String;
    date: Date;
    ponies : Pony[];
    constructor(city: String, date: Date, ponies: Pony[]) {
        this.city = city;
        this.date = date;
        this.ponies = ponies;
    }
}
