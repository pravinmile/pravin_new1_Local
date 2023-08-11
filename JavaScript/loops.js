console.log('normal for loop');
for(i=1;i<=10;i++){
    console.log('i --->',i);
}
// for(;;){} // infinite loop
// for(i=0;;){} //infinite loop
console.log(' ');
console.log('for/of loop');
let arry = [1,2,3,4,5,6,7,8,9,10];
let arry1 = [];
for(let n of arry){
    arry1.push(n);                  // all arry element itarating in arry1 and adding in arry1 one bye one
}
console.log(arry1);

// using normal for loop
let arry2 = [];
for( let i=0 ; i< arry.length ; i++){
    arry2.push(arry[i]);
}
console.log(arry2);

console.log(' ');
console.log('for/in loop');

// let objarray1 = [
//     {
//         name : 'Pravin',
//         mobno : 9876543210,
//         add : 'Pune'
//     },
//     {
//         name : 'Aniket',
//         mobno : 9876453210,         // basically this loop use for object not for array of abject thats why they give wrong ans
//         add : 'Pune'
//     },
//     {
//         name : 'Nipun',
//         mobno : 9866663210,
//         add : 'Pune'
//     },
//     {
//         name : 'Balaji',
//         mobno : 9879873210,
//         add : 'Pune'
//     },
// ];

// for(newItem in objarray1){
//     console.log(newItem);
// }

let std = {
    name : 'Pravin',
    Mob : 9874563210,
    add : 'Pune'
}
let array = [];
for(item in std){
    console.log(item,'--->',std[item]);
    array.push(std[item]);
}
console.log(array);

console.log(" ");

let fruits = ['Apple','Bananana','Mango','Cheryy','juice'];
let newfruits = [];
let j=0;
for(let i=0 ; i<fruits.length; i++){
    if(fruits[i]!='juice'){
        newfruits[j]=fruits[i];
        j++;
    }
    else{
        console.log('this is not fruit-->',fruits[i]);
    }
}
console.log('fruits-->',fruits);
console.log('newfruits-->',newfruits);

console.log(" ");
console.log('Remove rep');

let repArray = [10,20,55,66,55,88,66,33,21,11,44,55,3,1,2,5,4,1,2,5,8,9,6,3,2,1,5,8,7,4]; // remove duplicate element
let repArray1 = [];
let k = 0;
for(let i = 0 ; i < repArray.length ; i++){
    let cnt = 0;
   for(let j = i ; j < repArray.length ; j++){
    if(repArray[i] == repArray[j])
        cnt++;
   }
   if(cnt==1)
    repArray1[k++]=repArray[i];
}
repArray1.sort((a, b) => a - b);
console.log(repArray1);

let reparray3 = [1,2,3,6,5,4,1,2,5,6,9,7,7,8,1,2,3,4,5,6,7,8,9,88,77,88,55,4,11258,7];
let reparray4 = [];
// let x = 0; 
for(let i = 0 ; i < reparray3.length ; i++){
    if(!reparray4.includes(reparray3[i])){
        reparray4.push(reparray3[i]);
    }
}
console.log(reparray4);