// toString() ---> its return all element in array in the form of String 
// 1 datatype Object(Non-premative) after toString() ----> String.
let arr1 = ['a', 'n', 'i', 'k', 'e', 't'];
let newarr1 = arr1.toString();
console.log(newarr1);
// document.write(arr1);

//Join()
let arr2 = [10, 5, 4444];
let newarr2 = arr2.join('-');
console.log(newarr2);
console.log(typeof (newarr2));

//concat()
let arr3 = ['a', 'n', 'i', 'k', 'e', 't'];
let arr4 = ['m', 'i', 'l', 'e'];
console.log(arr3.concat(arr4));
console.log(arr3.concat(arr3, arr3, arr4, arr4));

//sort()
let arr5 = [1, 3, 2, 5, 4, 8, 7, 9, 11, 10];
let newarr5 = arr5.sort();
console.log(newarr5);

let arr6 = [9, 8, 7, 6, 5, 4, 1, 2, 3];
console.log(arr6.sort());

let numarr = [8, 5, 4, 7, 9, 6, 3, 1, 2, 22, 5, 44, 88, 99, 33, 11, 10, 885, 12, 17];
console.log(numarr.sort((a, b) => a - b));

let numarr2 = [5, 5, 5, 6, 2, 0, 2, 2, 1, 8, 9, 9, 6, 6, 6, 3, 2, 2, 1, 1, 1, 100];
console.log(numarr2.sort((x, z) => x - z));