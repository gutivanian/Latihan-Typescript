var Person = /** @class */ (function () {
    // nama adalah variabel anggota yang bersifat private
    function Person(name) {
        this.name = name;
    }
    // get name() { return this.name; }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
