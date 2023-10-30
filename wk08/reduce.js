 
// const num = ['H', 'E', 'L', 'L', 'O']

// const plusNum = num.reduce((sum, num) => sum + num)

// console.log(plusNum)

// console.log('--------------------------------------------')




const nums = [5,2,3,4,7]

const total = nums.reduce( (sum , num) => sum + num , 0 )

console.log(total)



const names = ['Alice' , 'Bob' , 'Ann' , 'Cath' ]
console.log(names.reduce((concat, str) => concat + str.charAt(0) , ''))


const buyProducts = 
[ {price : 50 , quatity :2} 
, {price : 299 , quatity : 10}
, {price : 15 , quatity : 5}]

const sum = buyProducts.reduce((now , next) => now + (next.price * next.quatity) , 0)
console.log(sum)









