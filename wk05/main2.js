//2.create array with spread operator
const x = [ 5 , 7 , 9 ]
const y = [...x, 11 , 13 , ...x]
console.log(x)
console.log(y)

const z = 'to day is a good day'
const m = [...z]
console.log(m)
console.log('-------------')
//for...of uses with array
for(const ch of m){
    console.log(ch)
}
console.log('-------------')
for(const value of x){
    console.log(value)
}