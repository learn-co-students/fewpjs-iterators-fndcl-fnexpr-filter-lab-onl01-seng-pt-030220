function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver[0] === string[0])
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}

/////Learn co solution

// function findMatching(source, sought) {
//   return source.filter( possibleMatch =>
//     possibleMatch.toLowerCase() === sought.toLowerCase()
//   )
// }

// function fuzzyMatch(arrayOfDrivers, letter) {
//   return arrayOfDrivers.filter(driver => driver.slice(0, letter.length).toUpperCase() === letter.toUpperCase())
// }

// function matchName(source, soughtName) {
//   return source.filter( record => record.name === soughtName)
// }