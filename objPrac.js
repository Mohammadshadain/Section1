const user={
    name:'shadain',
    age:23,
    address:'lucknow',
    email:'msd@123',
}
console.log(user);
console.log(user.age);
console.log(user.address);
console.log(user['email']);
// new value add
user.contactno='9919238714';
user.age=22;
console.log(user);


// special characters in js
user['roll-no']=5543;
console.log(user['roll-no']);

//passing variables and through variable they can find key and then value of key
const key='address';
console.log(user['address']);

// print all the key
console.log(Object.keys(user));
// all the values
console.log(Object.values(user));
// both keys and values
console.log(Object.entries(user));


// multiple entire ko ham array me store kar salte h
