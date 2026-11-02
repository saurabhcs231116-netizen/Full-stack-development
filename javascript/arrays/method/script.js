const ar=["saurabh","anshul","sakshi","divy","poorvi"];

// console.log(ar[0]);

ar.push("patel");
ar.pop();

ar.unshift("patel");
ar.shift();


ar.splice(1,0,5,10);
ar.toSpliced(1,1);

ar.forEach(element =>{
    console.log(element);
});




//------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log(ar.at(3));   //anshul

console.log(ar.slice(0,3));  // [saurabh , 5 ,10]

console.log(ar.with(2,100));

console.log(ar.indexOf("saurabh"));


//-----------------------------------------------
const arr1=[1,2,3,4,5,6,7,8,9];

let result = arr1.map(arr1=> arr1+2);

console.log(result); //[3,4,5,6,7,8,9,10,11]


//----------------------------------------------------------------------

const student=[1,2,3,4,5,,6,7,8];

let sortlisted=student.filter((n=>n%2===0));

console.log(sortlisted);


//----------------------------------------------------------------------

console.log("tosplise");

const s=[1,2,3,4,5,6,7,8];
console.log(s);

let so=s.toSpliced(1,1,400);

console.log(so);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------




const a1=[10,20,30,40,50,60];
console.log(a1.at(2));




//--------------------------------------------------------------

const str ="saurabh patel saurabh patel male 20";

console.log(str.replace("saurabh" , "subbu"));

console.log( str.replaceAll("saurabh" , "guddu"));


console.log(str.startsWith("saurabh"));

console.log(str.endsWith("saurabh"));
console.log(str.endsWith("20"));


console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.toLocaleLowerCase("saurabh"));

console.log(str.split(" "));

console.log(str.repeat(3));





//===========random number generation==============================================

const a =Math.random();
console.log(a);


console.log(Math.trunc(5.9));










