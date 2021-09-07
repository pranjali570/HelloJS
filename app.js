const balls = document.getElementsByClassName('ball')
const body = document.querySelector('body')

const arr = [1, 2, 3, 4, 5]
console.log(arr.push(6))

let i = 7
while(arr.length < 10)
{
    arr.push(i)
    i++;
}

console.log(arr)
console.log(arr.length)
console.log(arr.includes(10))
console.log(arr.indexOf(5))
arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)

arr.splice(6, 1)
arr.forEach((element, iteration) => {
    console.log(element + '-->' + iteration)
})
