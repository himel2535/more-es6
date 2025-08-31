// normal way by using for of loop to get sum of array-->

numbers=[4,5,6,7,45,12];
let sum=0;
for(const num of numbers){
    sum=sum+num;
}
// console.log(sum)

// ---reduced way--->

numbers1=[4,5,6,7,45,12];
const reduced=numbers1.reduce((acc,curr)=>acc+curr,0)
console.log(reduced)


// ----find max value from arr---->
const numbers2=[20,50,100,40,10];
const max=numbers2.reduce((acc,curr)=>acc > curr ? acc:curr);
console.log(max)


// create object and grouping some tricky-->

let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

let count=fruits.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit] || 0) + 1;
    return acc;
}, {} );
console.log(count)