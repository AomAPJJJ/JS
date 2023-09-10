const x = function(a){//a=2
    a = 2
}
let b = 1 
x(b)
console.log(b) // b does not charge after calling x()

//object parameter passing
const y = function(m){
    //m = std , m = memory add of std
    m.id = 555
}

const std = {id : 65130500050  , name : 'Panipak'}
y(std)
console.log(std.id) //std will change as function makes chage of m




