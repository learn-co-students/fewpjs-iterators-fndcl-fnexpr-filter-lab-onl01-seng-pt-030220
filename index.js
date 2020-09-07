// Code your solution here
function findMatching(array, string) {
    return array.filter(name => {return name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(array, string) {
    return array.filter(name => {return name.startsWith(string)})
}

function matchName(array, string) {
    return array.filter(object => {return object["name"] === string})
}