// modify the array or filtering the  array
const nums=[36,19,10,2,6,13,49];
// map function used to modify the array
const sq=nums.map((a) => { return a*a});
console.log(sq);
 

console.log('================================');
// print all the integers
const prices=[23.88,274.50,888.9,274.2121,99.90];
const arr=prices.map((a) => { return parseInt(a)});
console.log(arr);


// filter function used to filter the array
const even=nums.filter((n)=>{return n%2===0});
console.log(even);
 

// no is greater than 50 and no is less than 300
const no=prices.filter((n)=>{return (n>50&& n<300)});
console.log(no);


