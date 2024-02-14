const months=['jan','march','april','jun','july'];
const newmonth=months.splice(5,0,'dec');
console.log(months);
console.log(newmonth);
const update=months.splice(2,1,'March');
console.log(update);
console.log(months);