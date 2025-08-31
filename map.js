// const numbers=[2,10,50,30]

// const doubled=[];
// for (number of numbers){
//     const result=number*2;
//     doubled.push(result)
// }
// console.log(doubled)


// ----now we will apply map for same work---

// const numbers=[2,10,50,30];
// const doubleIt=x=>x*2;
// const double=numbers.map(doubleIt);
// console.log(double)

// ----there the direct function is sitting in map directly just--->

// const numbers=[2,10,50,30];
// const doubled=numbers.map(x=>x*2);
// console.log(doubled)


// const numbers=[2,10,50,30];
// console.log(numbers.map(x=>x*2))


// ----map on string---->

friends=['himel','monwar','hossan'];
// length of array-->
const lengthFriendName=friends.map(name=>name.length)
// first letter of name-->
const firstLetter=friends.map(name=>name[0].toUpperCase())

// console.log(lengthFriendName)
// console.log(firstLetter)



// ---By default it will show us undefined if consol log give outside for multiple line --->
numbers=[2,10,50,30];
const result=numbers.map((num,index)=>{ 
    // const total=num*index
    // console.log(total)
    // console.log(num*index)
})
// console.log(result)


const numbers2=[2,10,50,30];
const result2=numbers2.map((num,index)=>{ 
    return num*index;
})
// console.log(result2)


// map is an array method therefor it doesn't work object directly...but some system can be applied-->

let player={
    name:'sakib al hasan',
    age:37,
    type:'all-rounder'
};

let entries=Object.entries(player).map(x=>x.toString().toUpperCase());

console.log(entries)



