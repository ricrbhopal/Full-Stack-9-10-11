const ary = ["Apple", 2.5, 99, "Himacal", "a"];

console.log("With For Each");

var x = ary.forEach((element) => {
  if (typeof element === "number") {
    return element;
  }
});

console.log("X = ", x);

console.log("With Map");

var x = ary.map((element) => {
  if (typeof element === "number") {
    return element;
  }
});

console.log("X = ", x);

const ar2 = ["Apple", 2.5, 98, "Himacal", "a", 99];

var F = ar2.filter((item) => item !== 99);

console.log("F = ", F);

var Fi = ar2.find((item) => item === 99);

console.log("Fi = ", Fi);

var Fix = ar2.findIndex((item) => item === 99);

console.log("Fix = ", Fix);

const ar3 = [2, 5, 1, 17, 3, 9, 4, 8];

var s = ar3.sort((a, b) => b-a);

console.log("S = ", s);
