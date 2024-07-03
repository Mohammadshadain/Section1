// question 1 to check if the number is prime or not
const primeNumber =(n)=>{
    let count = 0;
    for(let i=2; i<=n; i++){
    if(n%i===0){
        count++;
    }

    } if(count!==1){
        return false;
    } else{
        return true;
    }

}
console.log(primeNumber(3));

// palendrome

function palendrome (n){
   let numstr=n.toString();
   let rst=numstr.split('').reverse().join(' ');
   return numstr ===rst;

}
console.log(palendrome(121));

// reverse a number

let number=123;
let numberstr=number.toString();
let reversno=numberstr.split('').reverse().join(' ');
console.log(reversno);


// all the prime numbers in a range greater than 50 and less than 300
const prime=(start,end)=>{
    for(let i=start; i<=end; i++)  {
        if(primeNumber(i)) {
            console.log(i);
        }
    }
}
prime(50,300);


console.log('--------------------------------');

// fibonacci numbers
function fibonacci(number){
    let a=0,b=1,c;
    console.log(a);
    console.log(b);
    for(let i=2; i<number;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;

    }
}

fibonacci(10);