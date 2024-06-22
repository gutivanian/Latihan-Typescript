class Person{
    // nama adalah variabel anggota yang bersifat private
    public constructor(private name: string){}

    // get name() { return this.name; }
    public getName(){
        return this.name
    }
}