var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 0] = "North";
    CardinalDirection[CardinalDirection["East"] = 1] = "East";
    CardinalDirection[CardinalDirection["South"] = 2] = "South";
    CardinalDirection[CardinalDirection["West"] = 3] = "West";
})(CardinalDirection || (CardinalDirection = {}));
// console.log(CardinalDirection);
var currentDirection = CardinalDirection.East;
console.log(currentDirection);
