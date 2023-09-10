//1. create array with literal[]
//innitial x with empty array

const x = []//typeof array ois object
console.log(typeof x)
if(x.length===0)console.log('emty array')
else console.log('not empty array')
console.log(x[0])


x[0] = 1
x[1] = 3
x[2] = 5

//add a new element in the end of array by using push function
x.push(7)
x.push(9)
console.log(x)
// [ 1, 3, 5, 7, 9 ]



console.log('---------------------------------------------------------------')



const y = [1, true, 'beginner', 2.5] //untypes, mixed type
console.log(y)
console.log(y[0]) //1
console.log(y[y.length - 1]) //2.5
console.log(y.length) //4


const z = [
    [ 2 , 4 , 6 ],
    [true , false],
    ['a','b','c']
]
console.log(z[0]) // [ 2 , 4 , 6 ]
console.log(z [ z.length - 1 ]) //['a','b','c']


console.log('---------------------------------------------------------------')


const m = [
    {produceID : 1 , name : 'pen' , price: 200},
    {produceID : 2 , name : 'notebook' , price: 100},
    {produceID : 3 , name : 'pencil' , price: 10}
]
console.log(m.length)
console.log(m[0])
console.log(m [ m.length - 1 ])


console.log('---------------------------------------------------------------')


const n = {productID : [ 1001 , 1002 , 1003 ], producetPrice : [ 100 , 10 , 12 ] } //object
//ดูจากปีกกาว่าเป็น object หรือ array
console.log(n.producetPrice)





