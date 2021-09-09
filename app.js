// let concert = true;
let concert = false;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT")
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT")
        }
    }, 2000)
});

console.log(attendConcert)
console.log(attendConcert)

// attendConcert.then((data) => console.log(data))
// attendConcert.catch((error) => console.log(error))

attendConcert.then((data) => console.log(data)).catch((error) => console.log(error))