function addNums(a,b) {
    var c=a+b;
    console.log(c);
    
}
addNums(3,2);
// console.log(c);

const getAvg=function(m1,m2,m3,m4){
    const avg=(m1+m2+m3+m4)/4;
    // console.log(avg);
    return avg;

}
 const res=getAvg(2,4,12)
 console.log(res);
 console.log(undefined+4);
//  if we perform any op with undefine it will give NaN not a number


// arrow function
const factorial=(n)=>{
    let f=1;
    for(let i=2; i<=n;i++){
        f*=i;
    }
    return f;

}
const ans= factorial(5);
console.log(ans);

// array desteucturing

let[a,b,c]=[7,87,4];
console.log(a);
// swap
[b,c]=[c,b];
console.log(b,c);

// string skping
const [name1,name2, , , name5]=[' ramu','shanu','kalu','bhalu','jlau']
console.log(name5);
const getRepot=( m1,m2,m3,m4,max=100)=>{
    const avg=getAvg(m1,m2,m3,m4);
    const percentage=avg/max*100;
    return[avg,percentage]

}
const[v1,v2]=getRepot(13,678,899,53,200)
console.log(v1,v2);

const divisilble= (start,end)=>{

      let sum=0;
    for(let i=start; i<end;i++){
        if(i%7==0){
            console.log(i);
            sum=sum+i;

        }

    }
    return(sum);
}
console.log(divisilble(1,100));