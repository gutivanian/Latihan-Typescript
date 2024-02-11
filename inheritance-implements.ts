interface shape{
    getArea: () =>number
}

class Rectangle implements shape{
    public constructor(
        protected readonly width:number,
        protected readonly height:number
    ){}

    public getArea():number{
        return this.width * this.height
    }
}

