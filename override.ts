interface Shape{
    getArea: () => number;
}

class Rectangle implements Shape{
    protected readonly width: number;
    protected readonly height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public getArea(): number{
        return this.width * this.height
    }

    public toString():string{
        
    }

}