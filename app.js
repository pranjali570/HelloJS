// let concert = true;
let concert = false;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});

// let attendConcert = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (concert) {
//             resolve("BOB ATTENDED THE CONCERT");
//         }
//         else {
//             reject("BOB FAILED TO ATTEND THE CONCERT");
//         }
//     }, 2000);
// });

// console.log(attendConcert)
console.log(attendConcert)

// attendConcert.then((data)=>console.log(data));

// attendConcert.catch((error)=>console.log(error));

// attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));


// async function asyfuncname() {
//   try {
//     let result = await attendConcert;
//     console.log(result)
//   }
//   catch(e) {
//     console.log(e)
//   }
// }
// asyfuncname()

let asyfuncname = async() => {
  try {
    let result = await attendConcert;
    console.log(result)
  }
  catch(e) {
    console.log(e)
  }
}
asyfuncname()

console.log("HI, I WON'T WAIT FOR ANYONE")

console.log("HI, I AM DYNING, I DON'T WANT TO WAIT")