var myMod = require('./../console.js'),
    p1 = { x: 1, y: 1 },
    p2 = { x: 4, y: 5 },
    dist1 = myMod.dist(p1, p2);
console.log("Dist for ", p1, " and ", p2, " is ", dist1);