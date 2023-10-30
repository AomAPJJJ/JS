const students = [
    { id: 1, name: 'John Lee' }, 
    { id: 2, name: 'adam Smith' }

]



console.log(students.sort((st1 ,st2) => st1.id - st2.id ))
console.log(students.sort((st1 ,st2) => st2.id - st1.id ))

console.log('--------------------------')


console.log(students.sort((st1 , st2) => {
    const name1 = st1.name.toLowerCase()
    const name2 = st2.name.toLowerCase()

    if(name1  > name2)return 1
    else if(name1  < name2) return -1
    else return 0


}))












