// const a = "abc"
// const b = "def"

// var res = "";
// for (var i = 0;i < Math.min(a.length, b.length); i++) {
//   res += a.charAt(i) + b.charAt(i)

//   console.log(a.charAt(i) + " " + b.charAt(i));
// }


// console.log(res);

var mergeAlternately = function(word1, word2) {
  let res = "";
  for (var i = 0; i < Math.max(word1.length, word2.length); i++) {
    res += word1.charAt(i) + word2.charAt(i);
  }
  return res;
};

console.log(mergeAlternately("abc", "defrag"));