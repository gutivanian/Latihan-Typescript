class NamedValue<T>{
    private _value: T | undefined;

    constructor(private name:string){}

    public setValue(value:T){
        this._value = value;
    }

    public getValue():T | undefined {
        return this._value;
    }

    public toString(): string{
        return `${this.name}: ${this._value}`
    }
}


let value = new NamedValue<number>('my number');
value.setValue(14)
console.log(value.toString());