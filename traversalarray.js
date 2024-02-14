var abc=['abc','def','klj','lki'];
//1>first rit display karvani
for(var i=0;i<4;i++)
{
    console.log(abc[i]);
}
//2> second rit display karvani aanathi index print thase
for(let elements in abc)
{
    console.log(elements);
}
//3> third rit display karvani aana thi value print thase
for(let elements of abc)
{
    console.log(elements);
}
//4>
abc.forEach(function(element,index,array)
{
    console.log(`element is ${element} and index is ${index} and array is ${array}`);
});