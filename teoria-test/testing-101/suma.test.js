import suma from "./suma.js";

const result = suma(1, 8);
const expected = 3;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log("Test passed!");
}