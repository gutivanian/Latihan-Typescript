interface Point{
    x:number;
    y:number
}

let pointPart:Partial<Point> = {} 
// partial penjadikan x dan y opsional
pointPart.x = 10;