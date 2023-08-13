var createCounter = function (init) {
  // define a counter for each operation because it not working if you define a counter in each function
  let counter = init;
  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return --counter;
    },
    reset: () => {
      counter = init; // reset counter
      return init;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5
