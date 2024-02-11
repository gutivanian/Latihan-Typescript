var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        // nama tidak dapat diubah setelah pendefinisian awal
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
