
var fun1 = () =>{
var a:number =3;
var b:number=8;
 const add:number =a+b;
const sub:number = a-b;
const mul:number =a*b;
const div:number = a/b;

console.log("add = ", add);
console.log("sub = ", sub);
console.log("mul = ",mul);
console.log("div = ",div);
}
fun1();



//2 nd method

const fun2 = (m:number,n:string) =>m+n
const add2:string = fun2(1,'hello').toUpperCase();
console.log("add2 =",add2);


//array

var arr = [1,2,4,'hello', 7, 9.5 ,'code'];
console.log("arr = " ,arr);

