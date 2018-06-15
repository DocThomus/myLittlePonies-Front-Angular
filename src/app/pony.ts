export class Pony {

    id: number;
    name: string;
    color: string;
    age: number;

    constructor(name: string, color: string, age: number, id? : number) {
        this.name = name;
        this.color = color;
        this.age = age;
        
        if (id === undefined) {
            this.id = -1;
        } else {
            this.id = id;
        }
    }
}
