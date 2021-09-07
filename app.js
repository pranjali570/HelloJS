// const balls = document.getElementsByClassName("ball")
const balls = document.querySelectorAll(".ball")
const body = document.querySelector("body")


balls.forEach((ball, iteration) => {
    const value = (iteration + 1) * 50
    ball.style = `transform: translateY(${value}px)`
})


let age = 19
let Name = "Pranjali"

console.log('Your age is ' + age)
console.log(`Hi ${Name} Your age is ${age}`)

