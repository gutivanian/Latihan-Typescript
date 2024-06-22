interface Person {
    name:string;
    age: number;
    location?: string
}

const bob:Omit<Person, 'age'|'location'> = {
    name: 'Bob'
    // omit telah menghilangkan age dan location
}

