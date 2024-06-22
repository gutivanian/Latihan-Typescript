function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log("No Yard");
    }
    else {
        console.log("Yard is ".concat(yardSize));
    }
}
var home = {
    sqft: 500
};
var home2 = {
    sqft: 500,
    yard: {
        sqft: 200
    }
};
printYardSize(home);
printYardSize(home2);
