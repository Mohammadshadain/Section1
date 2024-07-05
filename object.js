const user={
    name:'john',
    email:'john@123',
    password:'abc123',
    age : 34,
};
console.log(user);

// key--se-------value
console.log(user.name);
console.log(user['email']);
//new value add
user.address ='lucknow';
user.age=22;
console.log(user);

// special characters in js
user['roll-no']=23231;
console.log(user['roll-no']);

//passing variables and through variable they can find key and then value of key
const key='address';
console.log(user[key]);

// if we want to print all the key
console.log(Object.keys(user));
// if we want to print all the value
console.log(Object.values(user));

// if we want to print all the key and value both
console.log(Object.entries(user));

// question  we have to store multiple contact no of the user
user.contacts=['9129801663','6386644780','8840938778'];

console.log(user.contacts[1]);
console.log(user.contacts[2]);


const smartphone={
    brand:'apple',
    model:'iphone 16',
    price:100000,
    color:['white','green','black']
    
}


//syntax to acees the 2nd color of the smartphone
console.log(smartphone.color[1]);
console.log(smartphone.color[1][3][0]);




// replace green with two different colors
smartphone.color.splice(1,1,'light green','darkgreen');  // phla index ,dusra kitna remove krna h,third jo bhi replace krna h
console.log(smartphone.color);


const smartphoneArray=[
    {
        brand:'apple',
        model:'iphone 16',
        price:100000,
        color:['white','green','black']
    },

    {
        brand:'apple',
        model:'iphone 13',
        price:999999999,
        color:['gray','dark-green','black']
    },




    {
        brand:'MI',
        model:'poco X2',
        price:16000,
        color:['gray','white','black']
    },
    {
        brand:'samsumg',
        model:'s20 ultra',
        price:150000,
        color:['off-white','sea-green','black']
    },
    {
        brand:'samsumg',
        model:'s10ultra',
        price:159999,
        color:['dark-white','light-green','-dark-black']
    },
    {
        brand:'onePlus',
        model:'nord c2',
        price:29000,
        color:['dark-white','light-green','off-black'],
        ram:['128GB','6GB'],
    },
    {
        brand:'moto',
        model:'edge50',
        price:24000,
        color:['blue','pink','-dark-black'],
        ram:['64GB','4GB'],
    },

];
console.log(smartphoneArray);
//acess the first smatphone price
console.log(smartphoneArray[1].price);


// add a color in 3rd smatphone color
smartphoneArray[2].color.push('msd');
console.log(smartphoneArray[2].color);


// crate a array containg all thr brand of smatphone

const brand1=smartphoneArray.map((n)=>{return n.brand});
// console.log(new set( brand1));
// console.log(Array.from(new set(brand1)));
// console.log(Array.from('apple'));





// filter all smartphone containg white color

    console.log(smartphoneArray.filter((phone)=>{return phone.color.includes('white')}));

    // filter all apple smartphone

    const keyword='pple';
    const applesmartphone=smartphoneArray.filter((phone)=>{return phone.brand.toLowerCase()===keyword.toLowerCase()});
    console.log(applesmartphone);


    // if the user pass wrong inputt like 'apple ka plle or appl etc
    const applesmartphone2=smartphoneArray.filter((phone)=>{return phone.brand.toLowerCase().includes(keyword.toLowerCase())});
    console.log(applesmartphone2);


    // concaineate the arry

    [
       '1.  apple  iphone16 -79000',
  '2.  apple  iphone16 -79000',
  '3.  apple  iphone16 -79000',
  '4.  apple  iphone16 -79000',
  '5.  apple  iphone16 -79000',
  '6.  apple  iphone16 -79000',
  '7.  apple  iphone16 -79000',
    ]
    




    let [brand,model,price]=['apple', 'iphone16',79000];
    console.log(` ${brand}  ${model} -${price}`);

const kuchbhi=smartphoneArray.map((phone ,i)=>{return `${i+1}.  ${brand}  ${model} -${price}`})
console.log(kuchbhi);  


const phonecolor=smartphoneArray.map((phone)=>{return phone.color.map((c)=>{return`${phone.brand} ${phone.model} (${c})`})}).flat();

console.log(phonecolor);





