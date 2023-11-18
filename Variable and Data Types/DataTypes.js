//Primitive Data Types:(7)
//1. Number
let a = 7;
console.log(typeof a);

//2. String
let b = "Mahesh";
console.log(typeof b);

//3. Boolean
let c = true;
console.log(typeof c);

//4. Undefined
let d;
console.log(typeof d);

//5. Null but it is actually object type
let e = null;
console.log(typeof e);

//6. BigInt
let f = BigInt("123");
console.log(typeof f);

//7. Symbol
let g = Symbol("Hello");
console.log(typeof g);

//Non primitive Data Types
//1. Object (Best Way to declare)
const obj1 = [
  {
    name: "Mahesh",
    college: "CGU",
    rank: 1,
  },
];
obj1.map((prev) => console.log(prev.college));

//Not a best way
const obj2 = {
  name: "Mahesh",
  college: "CGU",
  rank: 1,
};

/*The question aries here we can change the name but object is const so how we change tht ?
Here we are changing the name which are a properties of a object we cannot change a object name we are changing 
only the properties that are placed in object*/

obj2["name"] = "Mahesh Dash";
console.log(obj2.name);
