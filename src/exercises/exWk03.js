/* paste starter code here */
// WEEK 03 EXERCISES

// === ANSWER 01 ===
export function ans01 () { 
    let myString = ""
    let amount = 7
    for(let a = 0; a <= amount; a++){ 
        myString+="#".repeat(a)
        //for(let symbols = a; symbols > 0; symbols--){
            //myString+="#"
        //}
        myString+='\n'
    }
    return myString
}
    

  
  // === ANSWER 02 ===
  export function ans02 () { 
    let myString = ""
    for(let num = 1; num <= 100; num++){
        if(!(num % 3) && !(num % 5)){
            myString += "FizzBuzz"
        }
        else if(!(num%3)){
            myString += "Fizz"
        }
        else if(!(num%5)){
            myString += "Buzz"
        }
        else{
            myString += `${num}`
        }
        if(num !== 100){
            myString += ", "
        }
    }
    return myString
  }
  
  // === ANSWER 03 ===
  export function ans03 () { 
    let size = 8
    let boardView = ""
    let symbol = "#"
    for(let row = size; row > 0; row--){
        if(row%2){ // odd row
            for(let column = 0; column < size; column++){ 
                if(column%2){ boardView+=symbol} // odd column
                else{boardView+=" "} 
            }
        }
        else{ // even row           
            for(let column = 0; column < size; column++){ 
                if(column%2){ boardView+=" "} // odd column
                else{boardView += symbol}
            }
        }
        boardView += '\n'
    }
    return boardView
  }
