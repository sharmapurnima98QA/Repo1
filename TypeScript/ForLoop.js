"use strict";
let i, j;
console.log("printing Floyd's triangle using basic for loop");
for (i = 1; i <= 5; i++) {
    let floyd = " ";
    for (j = 1; j <= i; j++) {
        floyd = floyd + "*";
    }
    console.log(floyd);
}
console.log("inverted floyd's triangle");
for (i = 1; i <= 5; i++) {
    let floyd = " ";
    for (j = 5; j >= i; j--) {
        floyd = floyd + "*";
    }
    console.log(floyd);
}
