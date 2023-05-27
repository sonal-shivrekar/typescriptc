var fun1 = function () {
    var a = 3;
    var b = 8;
    var add = a + b;
    var sub = a - b;
    var mul = a * b;
    var div = a / b;
    console.log("add = ", add);
    console.log("sub = ", sub);
    console.log("mul = ", mul);
    console.log("div = ", div);
};
fun1();
//2 nd method
var fun2 = function (m, n) { return m + n; };
var add2 = fun2(1, 'hello').toUpperCase();
console.log("add2 =", add2);
