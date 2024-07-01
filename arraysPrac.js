const arr1=['msd','naeem','jasim','james','aine','3433  ',console.log,true,Boolean];
console.log(arr1);
console.log(typeof arr1);
console.log(Array.isArray(arr1));
console.log(arr1.length);


console.log('----------------------------------------------------------------------');

const movies = ['300', 'MI','deadpool','expendables','3 idiots','infinite'];
console.log(movies
);


// indexing
console.log(movies[2]);
console.log(movies[8]); // out of bond index
console.log(movies.indexOf('3 idiots')); // give index no


// bCK se indexing
console.log(movies.at(-2)); // it follow back or - indexing


// change in array 
movies[1] ='MI & dead';
console.log(movies);

// sliceing in arrays
console.log(movies.slice(1,4)); //  the last index is not included
console.log(movies.slice(4 )); // will give the whole array after this index
console.log(movies.slice(-4 )); // will give the whole array after this index from the back or from - index

console.log(movies.slice(-4,-2 )); // will give the whole array after this index from the back or from - index to a particular given index
console.log(movies.slice(8));  // this will give the [] when we pass a out of bond index


// adding and removing elements
console.log(movies[1].slice(-4));  // removing elements from array


//  add elements to array at the end
movies.push('umar');
console.log(movies);
// add elements to array at the at the beginning
movies.unshift('umar');
console.log(movies);


// remove elements from array at the end
movies.pop(); // end vali jobhi element hoga vo pop hojaega
console.log(movies);

// remove elements from array at the beginning 
movies.shift(); // first element ko pop kardega
console.log(movies);



// const movies = ['300', 'MI','deadpool','expendables','3 idiots','infinite'];

// insert and remove elements at any position
movies.splice(3,2); // 3rd index se start kro or 2 elements ko remove kro , add kuch nhi karrhe h
console.log(movies);
// spilice me indexing 1 se start hoti h
movies.splice(3,0,'zain','hadi'); // 3rd index se start kro or 0 elements ko remove kro , add kardo zain or hadi ko
console.log(movies);

movies.splice(3,2,'shadain','naz')
console.log(movies);

