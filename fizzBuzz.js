
function fizz(max){
    let output = '        .      '
    for(let i = 1; i <= max ; i++ ){

        if( i % 3 === 0){
            output = 'Fizz'
        }
        if( i % 5 === 0){
            output = 'Buzz'
        }
        
       
    }
    return output
   
}
console.log(fizz(3))