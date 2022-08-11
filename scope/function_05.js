function foo() {
  //! log: m is not defined
  // var m = 100;
  //! log: 100
  m = 100;
}
foo();
console.log(m);
