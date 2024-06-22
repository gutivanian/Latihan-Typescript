interface Person{
    name:string;
    age:number
}

function printPersonProperty(person: Person, property: keyof Person){
    console.log(`properti ari ${person} adalah ${property}`);
}

let person = {
    name: "Max",
    age: 27
}

printPersonProperty(person, "name");
//printPersonProperty(person, "gender"); //error