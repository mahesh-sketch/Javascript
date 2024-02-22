// arrow function
const x = (a, b) => {
  console.log(a + b);
};

x(3, 2);

// A self-invoking expression is
// invoked (started) automatically, without being called.

//IIFE with named function
(function add() {
  console.log(3 - 2);
})();

//IIFE with arrow function
(() => {
  console.log(2 * 3);
})();
