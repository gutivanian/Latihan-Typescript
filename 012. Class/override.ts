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
        return `Rectangle[width="${this.width}", height="${this.height}"]`
    }

}

class Square extends Rectangle{
    constructor(width: number){
        super(width, width);
    }
    // ini mengganti toString di rectangle
    public override toString():string{
        return `Square[width="${this.width}"]`
    }
}


