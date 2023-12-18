//String is a sequence of character used to represent text

let str = "mahesh dash"
console.log(str);

//Length of string
console.log(str.length);

// also can define by backtick also called template literals
let str1 = `ramsagar dash`
console.log(str1);

//best example use case of template literals
let obj = {
    item : "pen",
    price: 10
}
let items = `the item name is ${obj.item} and price is ${obj.price}`
console.log(items);


//String method

//split the string and show in array
console.log(str.split(" "));

//Uppercase 
console.log(str.toUpperCase());

//Lowercase
console.log(str.toLowerCase());

//chracter found at specific position
console.log(str.charAt(1));

//slice method means start to end showing
console.log(str.slice(1,5));

let a = 'suprabhat'
let b = 'dash'

//concat two string
console.log(a.concat(b));