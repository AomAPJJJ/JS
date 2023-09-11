const nums = [1,3,5,7]

nums[nums.length-1] = 9; //ต่อท้าย

console.log(nums)


// function doSomthing(){
//     return 'doSomething'
// }

// console.log(doSomthing())
// console.log(typeof doSomthing)


function doSomething(activity){

    if(activity === null || activity === undefined) return `the activity is ${activity}`
    else return `${activity} is done`

}
let act1 
let act2 = null
let act3 = 'sleeping'

console.log(doSomething(act1))
console.log(doSomething(act2))
console.log(doSomething(act3))































