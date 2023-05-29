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
var code = function (m, n) { return m + n; };
var add2 = code(1, 'hello').toUpperCase();
console.log("add2 =", add2);
//array
var arr = [1, 2, 4, 'hello', 7, 9.5, 'code'];
console.log("arr = ", arr);
console.log("length = ", arr.length);
console.log("pop = ", arr.pop());
console.log(arr);
console.log("push = ", arr.push('sum'));
console.log(arr);
var fun3 = function () {
    var statusAdd = 'status-add';
    var statusSub = 'status-sub';
    var status = 'add';
};
fun3();
