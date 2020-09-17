function findMatching(drivers, input) {
    return drivers.filter( result => result.toLowerCase() === input.toLowerCase()
    )
}

function fuzzyMatch(drivers, input) {
    return drivers.filter( result => result.toLowerCase().indexOf(input.toLowerCase()) === 0
    )
}

function matchName(drivers, input) {
    return drivers.filter(record => record.name === input)
}