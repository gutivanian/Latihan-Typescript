function createPair<X,Y>(v1:X, v2:Y): [X,Y]{
    return [v1,v2];
}

console.log(createPair<number,string>(72,"saya"))