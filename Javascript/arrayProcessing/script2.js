const Students = ["Muskan", "Priya", "Milki", "gupta"];

if (Students.includes("Muskan")) {
  console.log("Eat Something");
} else {
  console.log("Study Something");
}

const numbers = [2, 5, 8, 11, 14, 7, 1, 3, 9, 12, 17, 15];

const filteredNumbers = numbers.filter((number) => number > 5);
const doubledNumbers = filteredNumbers.map((number) => number * 2);

console.log(doubledNumbers);

const arrayMethodChanning = numbers
  .filter((number) => number <= 5)
  .map((number) => number * 2);

console.log(arrayMethodChanning);

const res = numbers.filter((number) => number <= 5).includes(4);

console.log(res);

const data = [2, 5, 8, 11, 14, 7, 1, 3, 9, 12, 17, 15];

// let sum = 0;

const sum = data.reduce((sum = 0, item) => (sum += item));

console.log(sum);
