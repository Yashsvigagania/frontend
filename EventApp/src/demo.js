//MAP
const number=[1,2,3];
const newNumber=number.map(function(n){
    return n*2;
});
// const newNumber=number.map(n=>n*2); //=><li{n}</li> this is allowed
console.log(newNumber);

//FILTER
const newNum=number.filter(n=>n*2==0)
const n=[...number,5]; //spread
console.log(newNum);
console.log(n);
