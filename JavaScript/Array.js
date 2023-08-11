//Noraml Arreay : 
let a = [123]; // Empty Array
console.log(a);

let b = [987654321,'abc',true,1.5,]; //Array of diff DataTypes
console.log(b);
console.log('length of index 1--->',b[1].length);

console.log(a,b);
// document.write(a,b);
console.log(typeof(b[2]));

let i = 10;
console.log('The value of Array B of index',i,'--->',b[i]); // If array index out of bond in JS there's no error ---> but the value is undefined 
                                                            // but in JAVA there's Out Of Bond Exception throw.

let std = [{},{},{}]; //Empty Array of object
console.log(std);

let std1 = [
    {
        name : 'Pravin',
        mobileNumber : 9876543210,
        Gender : 'Male'
    },
    {
        name : 'Balaji',
        mobileNumber : 9999999999999999n,
        Gender : 'Male'
    },
    {
        name : 'Nipun',
        mobileNumber : 9876543210,
        Gender : 'Male'
    },
    {
        name : 'Nita',
        mobileNumber : 9876543210,
        Gender : 'Female'
    },
];
console.log(std1);
console.log(std1[1]);


//Arrays of arrays of Objects of Arrays --->

let emp = [
    {
        'emp1' : [
            {
                name : 'Ram',
                age : 36 ,
                Gender : 'Male' ,
                moNum : 987654321 ,
                compName : 'TCS' ,
                Skills : ['Java','Python','c','c++','JS','Anguler']
            },
            {
                name : 'Sita',
                age : 30 ,
                Gender : 'Female',
                moNum : 986654321 ,
                compName : 'Wipro',
                Skills : ['Java','Python','c','c++','JS','Anguler']
            },
            {
                name : 'Lakshman',
                age : 33 ,
                moNum : 987354321 ,
                compName : 'TCL',
                Skills : ['Java','Python','c','c++','JS','Anguler']
            }
        ] 
    }
];

console.log(emp.emp1[1].Skills[3]);