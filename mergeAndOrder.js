

// let array1 = []
// let array2 = [1,3]

// function mergeAndOrder(array1, array2) {

  // return all
  // console.log(all);

// }

function mergeAndOrder(array1, array2) {
  let mergeArr = [...array1, ...array2].sort();
  return mergeArr
}

console.log(mergeAndOrder( [1,3],  [2,8,4]));