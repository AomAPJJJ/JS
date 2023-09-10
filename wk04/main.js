// function doSomething(msg) {
//     console.log(x)
//     if (msg === null || msg === undefined) {
//       let someone = 'guest'
//     }
//     let x = 1
//     //   console.log(someone)
//     return `hello, ${msg}`
//   }
//   doSomething()



// var x =1
// if(x === 1){
//     var x = 'unknown'
//     console.log(x)

// }
// console.log(x)


// let x = 1 
// let y = x === 1 ? Math.random()*2+3/5 :x
// console.log(x===1 ? 1 : 0) 

// let m = null

// console.log(m?.charAt(0))


// let n = m ?? 0 // equals to m! === null || m === undifined && m!== undifined? m: 0
// console.log('equal : '+n)


// let y = [] //Array initialization with wmpty array
// let z = {} //object initialization with no property
// console.log(typeof y) //empty array(not null and undifined)
// console.log(typeof z) //empty object(not null and undifined)




// let a = [1,3,5,7]
// a = a ?? y
// console.log(a)//[]


// Random number in a range 1 to 10
// Math.random() randoms in a range 0 ot 0.99999*

// function randomNumber(min , max){
//     return Math.floor(Math.random()*( max - min -1)) + min
// }


// let n1 = 25,
//     n2 = 100

//     //const rand = Math.random() * 10 // o to 9.99999 
// const rand = Math.random( 25 ,100 )
// console.log(rand)

// const rand2 = Math.random( 1 , 10 )
// const rand3 = Math.random( 20 , 100 )



// console.log('-------')
// console.log(Math.round(3.1))
// console.log(Math.round(3.8))
// console.log('-------')
// console.log(Math.floor(3.1))
// console.log(Math.floor(3.8))
// console.log('-------')
// console.log(Math.ceil(3.1))
// console.log(Math.ceil(3.8))
// console.log('-------')
// console.log(Math.PI)
// console.log(Math.pow(2,5))
// console.log(Math.sqrt(9))

// console.log('-------')

// Random number in a range 25 to 100
// const rand1 = Math.random() * (100 - 25) + 25
//1. 75
//2. Math.random() 0 to 0.99999*
//3. 075  to 0.9999 75 = 0 to 74.999999
//4. +25 = 25 to 99.9999
// console.log(rand1)

let str1 = 'ant'
let str2 = 'Ant'
let str3 = 'ANT'
let str4 = 'ant'


console.log(str1 === str2) //false 'a' === 'A'
console.log(str1 !== str2) //true 'a' === 'A'
console.log(str2 === str3) //false 
console.log(str1 === str4) //true
console.log(str1 < str2) //false
console.log(str3 < str1) //true

console.log('---')

console.log(str1.includes('nt'))
console.log(str1.toLowerCase.includes('Nt'.toLowerCase()))
console.log(str1.toUpperCase.includes('Nt'.toUpperCase))
console.log(str1.imcludes('ant'))



































