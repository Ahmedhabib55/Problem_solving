function addStrNums(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    return  parseInt(num1) + parseInt(num2);
  }else {
    return -1; 
  }
}
console.log(addStrNums('dd','3'));

