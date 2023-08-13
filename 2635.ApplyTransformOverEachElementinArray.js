/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
?? The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 !=  Please solve it without the built-in Array.map method.
 */

var map = function (arr, fn) {};

// let newMap = map([1,2,3],plusone());
// create a function plus one for each element in the array

function plusone(n) {
  for (let i = 0; i < n.length; i++) {
    n[i] += 1;
  }
}
// console.log(plusone([1, 2, 3]));
// end of plusone
// increases each value by the index it resides in.
function plusI(arr) {
  let newMap = arr.map((el, idx) => el + idx);
  return newMap;
}

plusI([1, 2, 3]);

// end of plusI
// the third function will always returns 42.

function constant(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 42;
    console.log(arr[i]);
  }
}

constant([1, 2, 3]);

// the right solve
var map = function (arr, fn) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};
