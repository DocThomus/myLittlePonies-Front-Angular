import { Race } from './race';
import { Pony } from './pony';

export const RACES: Race[] = [
    new Race("Montpellier", new Date(2018,6,11), [
        new Pony("Alphonse", "blanc", 6),
        new Pony("Storm", "grey", 5),
        new Pony("Roger", "brown", 3)
    ]),
    new Race("Paris", new Date(2018,7,10), [
        new Pony("Lightning", "yellow", 11),
        new Pony("Roger", "brown", 3),
        new Pony("Alphonse", "blanc", 6),
        new Pony("Panga", "brown", 12)
    ]),
    new Race("Montpellier", new Date(2018,5,18), [
        new Pony("Alphonse", "blanc", 6),
        new Pony("Storm", "grey", 5),
        new Pony("Roger", "brown", 3),
        new Pony("Lightning", "yellow", 11)
    ])
];


