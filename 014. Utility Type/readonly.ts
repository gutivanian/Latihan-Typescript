interface Person{
    name:string;
    age:number
}

const person: Readonly<Person> = {
    name: "John",
    age: 30
}

// person.name = "asu" 
// akan error