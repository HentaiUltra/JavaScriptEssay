Function.prototype.tempCall = function (thisArg, ...params) {
  var fn = this;
  console.log("[ fn ] >", fn);
  thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = fn;
  var res = thisArg.fn(...params);
  delete thisArg.fn;
  return res;
};

function sum(num1, num2) {
  var name = "kb";
  return num1 + num2;
}

// var res = sum.call("abc", 10, 20);
var res = sum.tempCall("abc", 10, 20);

console.log("res", res);
