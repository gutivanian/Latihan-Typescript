interface Person{
    name:string;
    age: number;
    location?: string;
}

const bob: Pick<Person, 'name'> = {
    name: "Bob"
    // pick hanya mengambil name saja
}
