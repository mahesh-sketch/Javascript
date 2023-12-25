// Map:  creating a new array from an existing one, 
// applying a function to each one of  the elements of the first array.

let a = [10,20,30,40,50]
let mapresult = a.map((item,index)=>{
    console.log(index);
    return item * 2
})
console.log(mapresult);


//Filter: takes each element in an array and it applies a 
// conditional statement against it. If this conditional returns true, 
// the element gets pushed to the output array. If the condition 
// returns false, the element does not get pushed to the output array.

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

const filterResult =  students.filter((item,index)=>{
    return item.grade > 90;
  })
  console.log(filterResult);


// Reduce: reduces an array of values down to just one value. 
// To get the output value,
//  it runs a reducer function on each element of the array.

const reduceResult = students.reduce((total,item,index)=>{
    return item.grade + 10;
},'')
console.log(reduceResult);


var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    console.log(obj);
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

//console.log(petCounts); 