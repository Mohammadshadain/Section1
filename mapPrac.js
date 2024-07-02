const nums=[2,4,1,98,10,12.1,8];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]); // way to print whole array
}


console.log('using for of');
for(let n of nums){
    console.log(n);
}


console.log('using for each');
nums.forEach((a,i)=>{console.log(a,i);})

// square using for each
nums.forEach((a,i)=>{console.log(a*a)});


// create a array  cpontaing even no only
const arr=[];
for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        arr.push(nums[i]); 
    }
}
console.log(arr);



// map filter practice start form here

// map 
const sq=nums.map((a)=>{return a*a});
console.log(sq);
// print all the integer value using map
const intval=nums.map((a)=>{return parseInt (a) });
console.log(intval);


// filter  concept start
console.log('filter');
const even=nums.filter((n)=>{return n%2==0});
console.log(even);


// no is greater than 50 and less than 300
const isGreater=nums.filter((n)=>{return n>50&&n<300});
console.log(isGreater);