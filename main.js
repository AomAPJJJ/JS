// The rules of raindrops are that if a given number:

// has 3 as a factor, add 'Pling' to the result.
// has 5 as a factor, add 'Plang' to the result.
// has 7 as a factor, add 'Plong' to the result.
// does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.

function raindrops(rain){


   
   if( rain % 3 === 0 && rain % 5 === 0){
    return 'PlingPlang'
   }if( rain % 5 === 0 && rain % 7 === 0){
    return 'PlangPlong'
   }if( rain % 3 === 0 && rain % 7 === 0){
    return 'PlingPlong'
   }else if( rain % 3 === 0){
        return 'Pling'
   }else if( rain % 5 === 0){
        return 'Plang'
  }else if(rain % 7 === 0){
        return 'Plong'
   }else {
    return rain
   }

}

raindrops.toString()

console.log(raindrops(28))




















