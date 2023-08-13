/*
this some fo  solutions but
there are another solution that will use for (let i = 0; i < arr.length; i++) 
but i used in because i need value 
 */
var filter = function (arr, fn) {
  const res = [];
  for (let i in arr) {
    if (fn(arr[i], Number(i))) {
      res.push(arr[i]);
    }
  }
  return res;
};


