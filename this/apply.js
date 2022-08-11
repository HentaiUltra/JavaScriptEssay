Function.prototype.tempApply = function (thisArg, params) {
  var fn = this;
  console.log("[ fn ] >", fn);
  thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = fn;
  var res = thisArg.fn(...params);
  delete thisArg.fn;
  return res;
};

function sum(...arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  });
}

// var res = sum.apply("abc", [10, 20, 30]);
var res = sum.tempApply("abc", [10, 20, 30]);

console.log("res", res);
