var n = 100;
function foo() {
  console.log(n); //undefined
  return;
  var n = 200;
}
foo();
