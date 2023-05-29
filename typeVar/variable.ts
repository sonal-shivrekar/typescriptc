var fun3 =  () => {
    type  statusAdd = 'status-add';
    type  statusSub = 'status-sub';
    let status :'add'|'sub'| statusAdd| statusSub;

     status = 'add';
     console.log('status', typeof status);
};
fun3();


//primitive type
const a:string = 'hello';
const b:number = 3;
const c:boolean = false;
const d:undefined = undefined;
const e:null = null;

console.log('a', typeof a);
console.log('b',typeof b);
console.log('b',typeof c);
console.log('b',typeof d);
console.log('b',typeof e);

//complex type

const arr2 = [];
const arr3:number[] = [1,3,5,7,8];
console.log(arr3);

const arr4: (string|number)[] = [1,'code',6,9,'code2'];
console.log(arr4);


//object
/*let objUser:
{
    name:string,
    age:number,
    city:string;
}
={
    name:'parth',
    age:23,
    city:'nagpur'
};

objUser();*/

