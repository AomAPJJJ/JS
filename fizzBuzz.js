function fizzBuzz(max) {
  
  
  let result = ''

  for(let i = 1 ; i <= max ; i++){

    if( i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz'
    }else if(i % 3 === 0) {
      result +='Fizz'
    }else if(i % 5 === 0 ) {
      result += 'Buzz'
    }else{
      result += i
    }
  }

  return result


}
module.exports = fizzBuzz
