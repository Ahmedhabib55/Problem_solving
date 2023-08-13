function personFn(name, age) {
  // this = {};
  // this.constructor = PersonConstructor;
  // this.__proto__ = PersonConstructor.prototype;
  // Set up logic such that: if
  // there is a return statement
  // in the function body that
  // returns anything EXCEPT an
  // object, array, or function:
  //     return this (the newly
  //     constructed object)
  //     instead of that item at
  //     the return statement;
  var personObj = {};
  personObj.name = name;
  personObj.age = age;

  // return personObj;

  return this;
}
console.log(personFn("habib", 20));
