//x is globlal scope

const x = 1
{
    // x is a block scope
   const  x = 2
   console.log(x)
}

console.log(x)




function doIt(x){
    console.log(x)
}


doIt(100)
console.log(x)



let msg = 'hello'
console.log(msg.charAt(0)) //string uses zero based index

let msgs = [...msg] // spread operator

console.log(msgs)



let n ='2'
console.log(typeof n)
console.log(typeof Number(n)) //explicit type conversion











