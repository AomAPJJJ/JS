//destructuring+rest on array
const [a, ...b] = ['a', 'b', 'c', 'd']
console.log(a) //'a'
console.log(b) //[ 'b', 'c', 'd' ]
//destructuring +rest on object
const { id: studentId, ...n } = { id: 1, title: 'js', authors: 'Jame Smiths' }
console.log(studentId) //1
console.log(n) //{ id: 1, title: 'js', authors: 'Jame Smiths' }



function sum(n1, n2, n3) {
    console.log(n1) //[ 10, 20, 30 ], 10
    console.log(n2) //undefined, 20
    console.log(n3) //undefined, 30
    return n1 + n2 + n3
  }
  const nums = [10, 20, 30]
  console.log(sum(nums)) //10,20,30undefinedundefined
  console.log(sum(...nums)) //60








