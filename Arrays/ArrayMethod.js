let a = [10, 20, 30, 40, 50];

//Push: add to end
a.push(60);
console.log(a);

//Pop: delete from end and return
let b = [...a];
b.pop();
console.log(b);
console.log(a);

//Tostring: convert array to string
let c = [...a];
console.log(c.toString());

//Concat: joins multiple arrays and return
let d = [70, 80, 90, 100, 200];
console.log(a.concat(d));

//unshift: add to start
let e = [...a];
e.unshift(300);
console.log(e);

//shift: delete from start
e.shift();
console.log(e);

//slice: return piece of array (not original array change)
console.log(e.slice(2, 4));
console.log(e);

//splice: change the original array(add,remove,replace)
let f = [...e]
console.log(f);

//add element
//f.splice(2,0,400)

//delete element
//f.splice(2,1)

//replace element
f.splice(2,1,400)

console.log(f);

