// 1.create function with function declaration
function concat(str1,str2,op){
    return str1 + str2
}

// 2.create function with function expression
const num = 8
const toUpper = function (str1){
    return str1.toUpperCase()
}



// 3. create function with named function expression
const reverse = function rev(str1){
    return [...str1].reverse().join('')

}



console.log(concat('js','beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))

//doSomething is a hight order function because it accept op functioob as its
const doSomething = function(str1, op){
    return op(str1)
}
console.log(doSomething('Hey' , toUpper)) 
console.log(doSomething('Hey' , reverse))

// doIt is a higher order function because it return a function as a result
const doIt = function(){
    return concat //!== reutrn concat('1','2')
}

const x = doIt()
console.log(typeof x)//function
console.log(x('1','first')) //1first

















