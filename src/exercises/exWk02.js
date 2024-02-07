// WEEK 02 EXERCISES

// === ANSWER 01 ===
export function ans01 () { 
    let str = "The professor asked, \"Who demanded, 'Give me liberty or give me death!' in 1775?\""
    return str
  }
  
  // === ANSWER 02 ===
  export function ans02(){
    let myName = "Grant"
    myName = "Bob"
    return myName
  }
  
  // === ANSWER 03 ===
  export function ans03 () { 
    let car = "Toyota";
    let driver = "Bob";
    let speed = 80;
    let officer = "Officer Tim";
    let ticketCost = 500;
    let sentence = `Uncle ${driver} was driving his 1984 ${car} at ${speed} miles an hour in a mph zone. ${officer} pulled him over and issued a ticket for $${ticketCost}!`
    return sentence
  }
  
  // === ANSWER 04 ===
  export function ans04 () { 
    let count = 5;
    return count += 2
  }
  
  // === ANSWER 05 ===
  export function ans05 () { 
    let proposedNumber = 10;
    let isEven = !(proposedNumber % 2); // <-- modify this line
    return isEven
  }
  
  // === ANSWER 06 ===
  export function ans06 () { 
    let sleepHours = 10
    let feeling
    if (sleepHours < 8 ) {
      feeling = "tired"
    } else {
      feeling = "rested"
    }
    const statement = `I am feeling ${feeling}.`
    return statement
  }
  
  // === ANSWER 07 ===
  export function ans07 () { 
    let a = 5, b = "5"
    let isStrictEqual = a === b // <-- modify this line
    const statement = "Strict equality for a and b is " + isStrictEqual + "."
    return statement
  }
  
  // === ANSWER 08 ===
  export function ans08 () { 
    const pi = Math.PI
    let r = 12
    let h = 36
    let v = pi * h * r**2 // <-- modify this line
    const answer = `Cylinder volume is ${v}.`
    return answer
  }
  
  // === ANSWER 09 ===
  export function ans09 () { 
    let hasSpark = true
    let hasFuel = true
    let isWet = false
    let hasFireConditions = false
    if  (hasSpark && hasFuel && !isWet) {
      hasFireConditions = true
    }
    const answer = "Do we have fire conditions? " + hasFireConditions
    return answer
  }
  
  // === ANSWER 10 ===
  export function ans10 () { 
    // const now = new Date('2024-02-3'); should return true
    const now = new Date()
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = daysOfWeek[now.getDay()]
    let dayOff = false
    if (day == "Sunday" || day == "Saturday") {
      dayOff = true
    }
    const answer = "Do I have the day off? " + dayOff
    return answer
  }
  
  // === ANSWER 11 ===
  export function ans11 () { 
    let switchPosition = "up"
    let lightState
    lightState = switchPosition == "up" ? "on" : "off";
    const answer = "The light is " + lightState
    return answer
  }
  
