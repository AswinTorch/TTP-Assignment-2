// Assignment 2 - Aswin Nair
// forEach()
const myForEach = (array, func) => {
  for (let a = 0; a < array.length; a++) {
    func(array[a]);
  }
}

// forEach() test
console.log("forEach() test");
myForEach([1,3,4], (num) => console.log(num * 4));

// map()
const myMap = (array, func) => {
  let newArray = []
  for (let a = 0; a < array.length; a++) {
    newArray.push(func(array[a]));
  }

  return newArray;
}

// map() test
console.log("map() test");
let array2 = myMap([2,4,6], (num) => num * 2);
console.log(array2);

// filter()
const myFilter = (array, func) => {
  let newArray = [];

  for (let a = 0; a < array.length; a++) {
    func(array[a]) ? newArray.push(array[a]) : null;
  }

  return newArray;
}

// filter() test
console.log("filter() test");
let array3 = myFilter([1,2,3], (num) => num >= 2);
console.log(array3);

// some()
const mySome = (array, func) => {
  for (let a = 0; a < array.length; a++) {
    if (func(array[a])) return true;
  }

  return false;
}

// some() test
console.log("some() test");
console.log(mySome([1,-3,3,7,5], (num) => num % 2 === 0));

// every()
const myEvery = (array, func) => {
  let bool = true;
  for (let a = 0; a < array.length; a++) {
    if (!func(array[a])) bool = false;
  }

  return bool;
}

// every() test
console.log("every() test");
console.log(myEvery([0,2,8,12,6], (num) => num % 2 === 0));


// reduce()
const myReduce = (array, func) => {
  let acc = array[0], curr;
  
  for (let a = 1; a < array.length; a++) {
    curr = array[a];
    acc = func(acc, curr);
  }

  return acc;
}

// reduce() test
console.log("reduce() test");
console.log(myReduce([1,2,3,4,5], (acc, curr) => acc + curr));

// includes()
const myIncludes = (array, element) => {
  for (let a = 0; a < array.length; a++) {
    if (array[a] === element) return true;
  }

  return false;
}

// includes() test
console.log("includes() test");
console.log(myIncludes([1,2,3,4,5], 3));

// indexOf()
const myIndexOf = (array, element) => {
  for (let a = 0; a < array.length; a++) {
    if (array[a] === element) return a;
  }

  return -1;
}

// indexOf() test
console.log("indexOf() test");
console.log(myIndexOf([1,2,3,4,5], 6));

// push()
const myPush = (array, element) => {
  return [...array, element]
}

// push() test
console.log("push() test");
let myArray = [1,2,3,4,5];
console.log("Array before push: " + myArray)
myArray = myPush(myArray, 6);
console.log("Array after push: " + myArray)

// lastIndexOf()
const myLastIndexOf = (array, element) => {
  for (let a = array.length - 1; a >= 0; a--) {
    if (array[a] === element) return a;
  }

  return -1;
}

// lastIndexOf() test
console.log("lastIndexOf() test")
console.log(myLastIndexOf([1,2,3,2,5,2], 2));

// Object.keys()
const grabKeys = (object) => {
  let array = [];
  for (const prop in object) {
    array.push(prop);
  }
  
  return array;
}

// Object.keys() test
console.log("Object.keys() test")
console.log(grabKeys({a: 1, b: 2, c: 3}));

// Object.values()
const grabValues = (object) => {
  let array = [];
  for (prop in object) {
    array.push(object[prop]);
  }
  
  return array;
}

// Object.values() test
console.log("Object.values() test")
console.log(grabValues({a: 1, b: 2, c: 3}));