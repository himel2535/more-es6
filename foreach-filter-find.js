
// ----forEach----
const numbers=[4,5,9,0,24,17,44,33];

const x=numbers.forEach(num=>num*2);
// console.log(x)

// in this case for each return undefined ,if we apply console log just in the inner function then it will console this its uses for database;

// numbers.forEach(num=>console.log(num*2))


// -----filter-----

numbers1=[1,4,6,9,2,50,60,90,10,5,9];

// const filtered=numbers1.filter(num =>num>=50);
// console.log(filtered)

const filtered1=numbers1.filter((num,index)=>num<index);
// console.log(filtered1)

// -----find-----

numbers2=[1,4,6,9,2,100,60,90,10];

const finded=numbers2.find(num=>num>10);
console.log(finded)

