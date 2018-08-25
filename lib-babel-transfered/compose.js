"use strict";

var compose = function compose(argFirst, argReverse) {
  return function (arr) {
    return argFirst(argReverse(arr));
  };
};
var first = function first(arr) {
  return arr[0];
};
var reverse = function reverse(arr) {
  return arr.reverse();
};
var last = compose(first, reverse);
var res = last([1, 2, 3]);
console.log(res);