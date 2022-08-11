function foo() {
  console.log(n); //undefined
  // !!! 注意,是var n = 200;不是n=200
  var n = 200;
  console.log(n); //200
}
var n = 100;
foo();
