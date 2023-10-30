
const circle = {
    radius : 2,
    area(){
        return Math.PI * Math.pow(this.radius , 2)
    },
    equals(compareCircle){
        return this.radius === compareCircle.radius
    }
}

console.log(circle)
console.log(circle.radius)
console.log(circle.area())
console.log(circle.equals({radius: 2}))
console.log(circle.equals({radius: 3}))


//circle = {}
console.log(JSON.stringify(circle))
if(JSON.stringify(circle) === '{}' ) console.log('empty object')
else console.log('not empty object')

























