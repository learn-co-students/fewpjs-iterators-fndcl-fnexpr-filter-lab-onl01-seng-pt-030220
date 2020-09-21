// Code your solution here

function findMatching(driversArray, string){
    let result = driversArray.filter(d => {
        return d.toLowerCase() === string.toLowerCase();
    })
    return result
}

function fuzzyMatch(driversArray, string){
    let l = string.length
    let result = driversArray.filter(d => {
        return d.slice(0,l).toLowerCase() === string.toLowerCase()
    })
    return result
}

function matchName(driversArray, string){
    let result = driversArray.filter(d => {
        return d.name === string
    })
    return result
}