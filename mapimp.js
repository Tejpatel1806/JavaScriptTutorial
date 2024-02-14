let arr=[2,3,4,5,6];
let arr2=arr.map((currele,index,ele) =>{
    return currele*2;
}).filter((curreleme) =>
{
    return (curreleme>10);
})
console.log(arr2);
//aane kevay chaining effect in map