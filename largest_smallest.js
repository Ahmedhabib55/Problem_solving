function largest_smallest(array_values) {
  array = [Math.max(...array_values) ,  Math.min(...array_values)];
  return array
}

console.log(largest_smallest([5,1,2,4,9,10,200]));

// anther sloving function

// function largest_smallest(array_values) {
//   let larger = Math.max(...array_values)
//   let smaller = Math.min(...array_values)
//   array.push(larger, smaller)
//   console.log(array);
// }

// largest_smallest([5,1,2,4,9,10,200])