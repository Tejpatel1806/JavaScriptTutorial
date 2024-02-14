let arr=[25,36,49,64,81];
let arrsquare=arr.map((currele,index,arr)=>{
    return Math.sqrt(currele);
})
console.log(arrsquare);