//SECTION 1:

//QUESTION 1:
// Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
//Refactor it to use the rest operator & an arrow function:
function filterOutOdds(...numArr) {return numArr.filter(num =>  num % 2 === 0)};


// //QUESTION 2:
// findMin
// Write a function called findMin that accepts a variable number of arguments 
// and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1
function findMin(...nums){
  return nums.reduce((min, n) => {
    return n > min ? min : n;
  })
} //not sure why I'd need to use spread for this one, so I just used rest;


// QUESTION 3:
// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns 
//a new object which contains all the keys and values of the first object 
//and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
function mergeObjects(obj1, obj2){
  
  return {...obj1, ...obj2}

}


//QUESTION 4:
// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array 
// and a variable number of arguments. The function should return a new array with
//  the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
function doubleAndReturnArgs(arr, ...num){
  
  const newA = [];
  
  const copy = [...num];
  
  copy.forEach((val) => {
    const dbl = val * 2;
    newA.push(dbl);
  })

  return [arr, ...newA]

}

//SECTION II:

//QUESTION 1:
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => { //confused so I translated solution
  console.log(items.length)
  let idx = Math.floor(Math.random() * items.length); //num btwn 0-2 (there are 
  //0-2 indacies in array)
  
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
} //return array literal:

//if(0,0)     -> [] + [2,3] = [2,3]
//if (0,1)    -> [1] + [3] = [1,3]
//if (0,2)    -> [1,2] + [0] = [1,2]


// const array2 = [1,2,3]
// const sliced = array2.slice(0, 0)
// console.log(sliced)
// const sliced2 = array2.slice(0, 1)
// const sliced3 = array2.slice(0, 2)

// console.log(sliced)
// console.log(sliced2)
// console.log(sliced3)

// //if idx =0;
// console.log(array2.slice(1)) //0, 0
// console.log(array2.slice(2)) //0, 1
// console.log(array2.slice(3)) //0, 2

//QUESTION 2:
/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
  return [...array1, ...array2]
}

//QUESTION 3:

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return {...obj, [key]: val}
}

//QUESTION 4:
/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let theObj = {...obj}
  delete theObj[key] //didn't know delete was a thing, but the solution now makes 
  //sense
  return theObj

}

//QUESTION 5:
/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1, ...obj2}
}

//QUESTION 6:
/** Return a new object with a modified key and value. */
function update(obj, key, val) {
  const newOb = {...obj}
  newOb[key] = val;
  return newOb;
}

// update({a:1, b:2}, 'z', 20)
// {val: 20}


