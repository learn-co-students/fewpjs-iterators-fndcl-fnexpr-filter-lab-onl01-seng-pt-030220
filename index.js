// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(possMatch => possMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, test) {
    return drivers.filter(possMatch => possMatch.toLowerCase().indexOf(test.toLowerCase()) === 0)
}

function matchName(drivers, name) {
    return drivers.filter(record => record.name === name)
}