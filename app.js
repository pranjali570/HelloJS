const arr = [1, 2, 3, 4]
console.log(arr[2])

// ES6 Destructuring
const [one, two, three, four, five] = [1, 2, 3, 4]
console.log(three)
console.log(four)
console.log(five)

function getscores(){
    return [90, 100]
}

let [x, y, z] = getscores()

console.log(x)
console.log(y)
console.log(z)

const obj = {
    Name: "Nikhil Agarwal",
    email: "nikhilagarwaliitkgp@gmail.com",
    age: 20
}

console.log(obj.email)

let {dum, Name, age, email} = obj
console.log(email)
console.log(age)
console.log(Name)
console.log(dum)

let person = {
    firstname: "Pranjali",
    lastname: "Agrawal"
}

let {firstname = "", middlename = "", lastname = ""} = person
console.log(firstname, middlename, lastname)


let nums = [[1, 2, 3],[4, 5, 6]]
// let [num1, num2] = nums
// console.log(num1)
let [[num11, num12, num13], [num21, num22, num23]] = nums
console.log(num11)