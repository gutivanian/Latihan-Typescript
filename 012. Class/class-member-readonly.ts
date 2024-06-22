class Person{
    private readonly name:string;
    
    public constructor(name: string){
        this.name = name;
        // nama tidak dapat diubah setelah pendefinisian awal
    }

    public getName(): string{
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());