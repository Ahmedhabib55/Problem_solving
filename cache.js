// leetcode memoize 
// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript

function memoize(fn) {
	let cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache){
      return cache[key];
    }
    return (cache[key] = fn(...args));
  };
}
