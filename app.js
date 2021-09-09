let ranks = [1, 2, 3, 4, 5, 6]
// const newArr = ranks.map(
//     (e) => {
//         console.log(e+1)
//     }
// )
// console.log(newArr)

console.log(ranks.map((index, e) => { 
    return(index)
})) 

console.log(ranks.map((e, index) => { 
    return(e * 100)
})) 

console.log(
    ranks.forEach((e, index) => {
      return e * 100;
    })
  );
  
  let newarr = ranks.map((e, index) => {
      console.log(e)
      console.log(index)
      if(e%2 === 0)
          return e
  })

  console.log(newarr);
  