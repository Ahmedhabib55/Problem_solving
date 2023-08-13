// a simple function to add something
const add = (n) => (n + 10);
add(9);

// a simple memoized function to add something
function memoize(fn) {
  return function(...args) {
		console.log(args);
    const key = JSON.stringify(args);
		console.log(key);
  };
}

const memoizedAdd = memoize(3)(1,2,45,50);
memoizedAdd()

// // returned function from memoizedAdd
// const newAdd = memoizedAdd();
// console.log(newAdd(9));	// calculated
// console.log(newAdd(9));	// cached