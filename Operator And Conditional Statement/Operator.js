//Use to perform some operation on data

//1. Aritmetic Operators (+,-,*,/)
/*• Modulus
• Exponentiation
• Increment
• Decrement*/

let a = 10,
  b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//Modulus
console.log(a % b);

// Exponentiation
console.log(a ** b);

//Increment
console.log(a++);

//Decrement
console.log(a--);

//2. Assignment Operators

// = (equal)
console.log((a = b));
// +=
console.log((a += b));
// -=
console.log((a -= b));
// *=
console.log((a *= b));
// %=
console.log((a %= b));
// **=
console.log((a **= b));

//3. Comparison Operators
// == (equal to)
console.log(a == b);
// === (equal to and type)
console.log(a === b);
// != (not equal)
console.log(a != b);
// !== (not equal to & types)
console.log(a !== b);
// > (greater than)
console.log(a > b);
// >= (greater than equal)
console.log(a >= b);
// < (less than)
console.log(a < b);
//<= (less than equal)
console.log(a <= b);

//4. Logical Opeartor(&&, ||, !)
console.log(a && b);
console.log(a || b);
console.log(!a);

//5. Ternary Operator
// condition ? true output: false output

console.log(a >= b ? "True" : "False");
