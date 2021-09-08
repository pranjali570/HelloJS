 function Name(fullname){
     return fullname
 }
console.log(Name("Pranjali Agrawal"))

let add = function add(x, y){
         return x+y
}
console.log(add)
console.log(add(10, 47))

let subtract = (a, b) => {
    return a - b;
}
console.log(subtract(17, 9))


const counter = {
    count: 0,
    next: function() {
        return ++(this.count)
    },
    // previous: () => {
    //     return (this.count)--
    // },
    // previous: () => {
    //     return --(counter.count)
    // },
    previous: function() {
        return --(this.count)
    },
    key1: () => {
        return this
    },
    key2: this.location.href
}
console.log(counter)
console.log(counter.next())
console.log(counter)
console.log(counter.next())
console.log(counter)
console.log(counter.next())
console.log(counter)
console.log(counter.previous())
console.log(counter)
console.log(counter.key1())
console.log(counter.key2)
    