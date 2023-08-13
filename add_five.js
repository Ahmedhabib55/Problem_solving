

// 

function add_five(arr) {
  let newArray = [];
  for (var i = 0; i <arr.length; i++) {
    newArray.push(arr[i]+= 5);
  }
  return newArray;
}
console.log(add_five(['book', 'pen', 'pencil']));