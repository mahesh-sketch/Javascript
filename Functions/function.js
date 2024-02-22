//Block of code that performs a specific task,
//can be invoked whenever needed

function mahesh() {
  console.log("Mahesh");
}
mahesh();

//parameter and argument
function add(a, b) {
  //parameter a,b
  console.log(a + b);
}
add(2, 3); //argument

//Q1
function vowls(a) {
  let count = 0;
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u" ||
      element === "A" ||
      element === "E" ||
      element === "I" ||
      element === "O" ||
      element === "U"
    ) {
      count++;
    }
  }
  console.log(count);
}

vowls("hello");
