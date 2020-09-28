
let drivers = ['marcos', 'vanessa', 'murphy', 'casey', 'vans', 'vizcaino']

function findMatching(drivers, string){
  return drivers.filter(driver=> driver.toLowerCase() === string.toLowerCase() )
}

// console.log(findMatching(drivers,'VANESSA'))


function fuzzyMatch(drivers, string){
  return drivers.filter(driver=> driver[0] === string[0] )
  // return drivers.filter(driver=> driver.charAt(0) === string.charAt(0) ) 
}

// console.log(fuzzyMatch(drivers, 'marcos'))


function matchName(drivers, string){
  return drivers.filter(driver=> driver.name === string )
}