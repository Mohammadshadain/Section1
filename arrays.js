const arr=[65,'hiii',true,console.log, Boolean];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr)); // arrays hai ki nhi ye check krta h
console.log(arr.length);       //also works in string

console.log('\n================================');
const movies = ['300', 'MI','deadpool','expendables','3 idiots','infinite'];

// indexing function
console.log(movies[1]); // also works in string
console.log(movies[8]);
console.log(movies.indexOf('MI'));
// back se indexing function

console.log(movies.at(-2));

// changing the   array
movies[2]='deadpool & wolverine';
console.log(movies);


// slicing in arrays
console.log(movies.slice(2,5)); // also works in string
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,-2));
console.log(movies.slice(8));




// adding and removing elements
console.log(movies[2].slice(-9)); // removeing
// push or add elements at the end
movies.push('kanchana')
console.log(movies);
movies.unshift('gangs of wassepur'); // add elements at the beginning
console.log(movies);

// pop or remove elements at the end

movies.pop();
console.log(movies);

movies.shift(); // remove elements at the beginning
console.log(movies);
// insert and remove elements at any position

movies.splice(3,2) // remove 2 elements at index 3
console.log(movies);
movies.splice( 3,0 ,' jhon wick','the boys','msd') // add elements after index 3

movies.splice( 3,2 ,' jhon wick','the boys','msd') // add and remove (2)elements after index 3
console.log(movies);
