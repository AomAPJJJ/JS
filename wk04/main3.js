let scores = 39
let grade = 'F'


// < 40 'F , 41-70 'Good' , 71-100 'Very Good'
if(scores < 0 || scores > 100) grade = "invalid scores"
else if(scores > 70) grade = 'Very Good'
else if(scores > 40) grade = 'Good'
console.log(grade)

console.log('---------------------------------------------')

const month = 1
let monthName = ''
switch(month){
  case 1 : 
    monthName = 'Jan'
    break
  case 2 : 
    monthName = 'Feb'
    break
  case 3 : 
    monthName = 'Mar'
    break
}

console.log(monthName) //Mar


const ch = 'A'


