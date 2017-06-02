export class Person {

    // private name:string;
    // private age:number;

    constructor(
        private name:string, 
        private age:number,
        private single:boolean = false
        ){}

    getName(): string{
        return this.name;
    }

    sumAge(sum:number):void{
        this.age+=sum;
    }

}