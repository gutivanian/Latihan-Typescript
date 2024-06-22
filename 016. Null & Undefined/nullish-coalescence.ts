function printMileage(mileage: number | null | undefined){
    console.log(`Mileage ${mileage?? 'Not Avaliable'}`);
}

printMileage(null)
printMileage(100)