/*
// Question 1

const double = (num) => {
  return num + num;
}
const square = (num) => {
  return num * num;
}
const doubleSquare = (num1) => {
  let num2 = double(num1);
  let result = square(num2);
  return result;
}
console.log(doubleSquare(2));

//Question 2

const classyGreeting = (firstName,lastName) => {
  return `${"Hello, "}${firstName} ${lastName}`;
}

const yell = (str) => {
  return str.toUpperCase();
}

const yellGreeting = (firstName,lastName) => {
  let str = classyGreeting(firstName,lastName)
  return yell (str);
}
console.log(yellGreeting("Leo","Lu"));

//Question 3

const removeDupes = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(removeDupes(["a","b","a"]));

const concatAndRemoveDupes = (arr1,arr2) => {
  let newArray = arr1.concat(...arr2);
  return removeDupes(newArray);
}
console.log(concatAndRemoveDupes([1,2,3,4],[2,3,4,5,6]));
/*
//Question 4

let grades = [91, 85, 100, 92, 88];
const sort = (arr) => {
  let order = [];
  order = arr.sort(function(a,b){return a - b;});
  return order;
}
// console.log(sort(grades));

const middleElement = (arr) => {
  let midInd = Math.floor (arr.length / 2);
  if (arr.length % 2) {
    return arr[midInd];
  } else {
    return arr[midInd] + arr[midInd - 1];
  }
}
// console.log(middleElement(grades));

const median = (arr) => {
  if (sort(arr).length % 2)  {
    return middleElement(arr);
  } else {
    return middleElement(arr) / 2;
  }
}
console.log(median(grades));

//Question 5

const repeat = (str,numOfTimes = 2) => {
  for (let i = 0; i < numOfTimes; i++) {
    console.log(str);
  }
}
repeat("Hello");
repeat("Good",3);

//Question 6

function sumOfArg (...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(sumOfArg(1,2,3));

//Quesiton 7

const adder = (num1) => {
  return (num2) => {
    return num1 + num2;
  }
}
const add5 = adder(5);
const add9 = adder(9);
console.log(add5(10));
console.log(add9(10));
*/
