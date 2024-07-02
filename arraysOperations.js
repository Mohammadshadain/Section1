const fruits = ['Mango','banana','apple','orange','pineapple',' grapes','guava','papaya'];
// access elements from oranges to papaya
console.log(fruits.slice(3));
// 2
console.log(fruits.splice(2,3));
// 3
console.log(fruits.splice(-1, 0,'msd','msd'));
console.log(fruits);
// 4



const nums=[36,354,21,90,100,123,101];
for (let i=0; i<nums.lenght; i++) {
    console.log(nums[i]);
}
console.log('--------------------------------'
);

for(let n of nums){
    console.log(n);
}

console.log('--------------------------------using for each fn...');

nums.forEach((a,i)=>{ console.log(a,i);})// callback function is very important here


// phla parameter for each me valur dega and dursa parameter index dega


// square using for each fn
nums.forEach((a)=>{console.log(a*a)});


// create a new array containg only even no
const arr=[];
for(i=0;i<nums.length;i++){
    if(nums[i]%2===0){
        arr.push(nums[i]);
    }
}
console.log(arr);


