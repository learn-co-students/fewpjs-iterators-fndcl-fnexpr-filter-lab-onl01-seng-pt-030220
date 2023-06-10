//const { arrayContaining } = require("expect");



function findMatching(drivers, string) {
  
 let answer = drivers.filter(driver => { 
  return driver.toLowerCase() === string.toLowerCase();
 })

  return answer
}

function fuzzyMatch(drivers, letters) {
  let answer = drivers.filter(driver => {
    return driver.charAt(0) === letters.charAt(0)
  })
  return answer
}

function matchName(drivers, string) {
  let answer = drivers.filter(driver => {
      return driver.name === string;
  })
  return answer
}







