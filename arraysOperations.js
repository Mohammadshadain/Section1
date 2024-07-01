const fruits = ['Mango','banana','apple','orange','pineapple',' grapes','guava','papaya'];
// access elements from oranges to papaya
console.log(fruits.slice(3));
// 2
console.log(fruits.splice(2,3));
// 3
console.log(fruits.splice(-1, 0,'msd','msd'));
console.log(fruits);
// 4