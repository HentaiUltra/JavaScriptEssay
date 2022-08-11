function foo() {
  var a = (b = 10);
  //! =>会转换为下面代码
  // var a = 10;
  // b = 10;
}
foo();
console.log(a); // a is not defined
console.log(b); //10
