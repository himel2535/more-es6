student={
    name:'Himel',
    age:27,
    roll:2535,
    1:'KocorMocor',
    'moja-dar':'moja-dar-khabar',
    $ok:'moja-dar-khabar',
    family : {
        brother:{
            number:1,
            quality:'better',

        },
        5:{
            number:4,
            quality:'good',
            2:{
                father:true,
                mother:'rousna begum',
            }
        },
        4:{
            isNumber:true,
            isArr:false
        }
    }
}
// console.log(student)
// console.log(student.age)
// console.log(student[1])
// console.log(student[moja])
// console.log(student['moja-dar'])
// console.log(student.$ok)
// console.log(student.family[4])
console.log(student.family[5][2].mother)