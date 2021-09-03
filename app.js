// Conditional Statements
// Control flow Statements

// Check Whether number is even or odd

const num = 25
if(num % 2 === 0){
    console.log(num, " is even")
}
else{
    console.log(num, " is odd")
}

console.log("------------------------")

let a = '91'
if(a % 2 === 0){
    console.log(a, " is even")
}
else{
    console.log(a, " is odd")
}

console.log("------------------------")

let n = 78
if(typeof n === 'number'){
    if(n % 2 === 0){
        console.log(n, " is even")
    }
    else{
        console.log(n, " is odd")
    } 
}
else{
    console.log(n, "is not a integer")
}

console.log("------------------------")

let b = 12.5
if(typeof b === 'number'){
    if(b % 2 === 0){
        console.log(b, " is even")
    }
    else{
        console.log(b, " is odd")
    } 
}
else if(typeof b === 'float') {
    console.error("not an integer")
}
else {
    console.error("not a number")
}

console.log("------------------------")

let c = 0
if(typeof c === 'number') {
    if(c === 0)
        console.log("Neither even nor odd");
    else if(c % 2 === 0)
        console.log("Even");
    else
        console.log("Odd");
}
else
    console.error("Not a number");



