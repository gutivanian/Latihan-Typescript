interface Car{
    make: string;
    model: string;
    mileage?: Number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 1000
}