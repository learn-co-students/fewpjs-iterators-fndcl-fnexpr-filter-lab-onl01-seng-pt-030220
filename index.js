
function findMatching(drivers, name) {
// let array = []
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, name) {

  return drivers.filter(driver => {

    return driver.charAt(0) === name.charAt(0)
})
}

function matchName(drivers, name) {

  return drivers.filter(driver => {
     if (driver.name === name) {
       return driver
     }
  })

}
