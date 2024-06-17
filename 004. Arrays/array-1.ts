const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const angka: number[] = [1,2,3];
angka.push(10)

console.log(names);
console.log(angka);