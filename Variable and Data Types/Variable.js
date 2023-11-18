/*what is variables
A: variables are containers of data

Rules of variables
• Variable names are case sensitive; "a" & "A" is different.
eg: apple and Apple are different

• Only letters, digits, underscore( _ ) and S is allowed. (not even space)
eg: mahesh_123

• Only a letter, underscore( _ ) or S should be 1st character.
• Reserved words cannot be variable names.

Let, const and var
var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.
*/


var mahesh = 121
console.log(mahesh)

let a = 213
console.log(a)

const b = 512
console.log(b);

//Block scope
{
    let a = 123
    console.log(a)
}
{
    let a = 235
    console.log(a);
}