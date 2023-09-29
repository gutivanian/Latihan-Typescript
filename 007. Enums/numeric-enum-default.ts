enum CardinalDirection{
    North,
    East,
    South,
    West
}

// console.log(CardinalDirection);

let currentDirection = CardinalDirection.East;
console.log(currentDirection);

currentDirection = 2
// currentDirection = "North"
// kode diatas akan memberikan error, karena North dalam bentuk string bukan enum, yang enum adalah angka indeks 1,2,3, dst
console.log(currentDirection);