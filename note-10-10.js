// <Arguments>
// function logAllArguments (thing) {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// logAllArguments(1,2,3,4,5,6);

// function logArguments(args) {
//   for(let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i])
//   }
// }
//
// logArguments(5,6,7)

//<Default values as argumens in function>
// const makeArr = (min,max,step = 1) => {
//   let output = [];
//   for (let i = min; i <= max; i += step) {
//     output.push(i);
//   }
//   return output;
// }
// console.log(makeArr(3,13,2));

// const print = (...things) => {
//   console.log(things);
//   for (let i = 0; i < things.length; i ++) {
//     console.log(things[i]);
//   }
// }
// print([3,13,2],"hello");

//<Closure>

function createCounter () {
  let count = 0;
  return function increment () {
    count ++;
    return count;
  }
}
console.log(createCounter());
console.log(createCounter()());
const firstCounter = createCounter();
console.log(firstCounter());
console.log(firstCounter());
firstCounter();
firstCounter();
