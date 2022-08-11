function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}
Person.prototype.getInfo = function () {
  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
};

function createObj(o) {
  function F() {}
  F.prototype = o;
  var newObj = new F();
  console.log("new", newObj.__proto__);
  return newObj;
}

var a = new Person("jojo", "femal");
// console.log("%c [ a ]-18", "font-size:18px; background:pink; color:#bf2c9f;", a);
// a.getInfo(); // console.log("a", a);
console.log("a", a.__proto__ === Person.prototype);

var b = createObj(Person.prototype);
console.log("%c [ b ]-22", "font-size:18px; background:pink; color:#bf2c9f;", b.__proto__);
// console.log("Person.prototype", Person.prototype);
// console.log("b", b.__proto__ === Person.prototype);

// b.getInfo();
