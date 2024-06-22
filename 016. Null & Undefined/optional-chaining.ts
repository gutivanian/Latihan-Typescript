interface House {
    sqft: number;
    yard?: {
        sqft: number;
    }
}

function printYardSize(house:House){
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined){
        console.log("No Yard");
    } else {
        console.log(`Yard is ${yardSize}`);
    }
}

let home: House = {
    sqft: 500
}

let home2: House = {
    sqft: 500,
    yard: {
        sqft: 200
    }
}

printYardSize(home)
printYardSize(home2)
