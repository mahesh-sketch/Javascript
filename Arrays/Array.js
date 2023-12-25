//Collection of items is called as arrays

//create Arrays
let a = [10, 20, 30, 40, 50];
console.log(a);

//Length property
console.log(a.length);

//using forEach to print data of arrays
a.forEach((element) => {
  console.log(element);
});

//using for loop to print the data
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}

//ques 1
let b = [85, 97, 44, 37, 76, 60];
let blength = b.length;
let sum = 0;
let average;
b.forEach((element) => {
  sum += element;
  average = sum / blength;
});
console.log(Math.floor(average));
