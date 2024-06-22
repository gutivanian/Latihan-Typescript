function printPersonProperty(person, property) {
    console.log("properti ari ".concat(person, " adalah ").concat(property));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
//printPersonProperty(person, "gender"); //error
