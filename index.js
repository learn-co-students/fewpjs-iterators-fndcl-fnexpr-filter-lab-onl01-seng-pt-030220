

function findMatching(drivers, query) {
    return drivers.filter(driver => {
    return driver.toLowerCase() === query.toLowerCase();
    })
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver[0] === query[0])
}

function matchName(driver, query) {
    return driver.filter(driver => driver.name === query)
}