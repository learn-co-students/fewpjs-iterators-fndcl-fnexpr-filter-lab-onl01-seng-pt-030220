// Code your solution here
function findMatching(drivers, string){
const meow = drivers.filter(n => {
    return n.toLowerCase() === string.toLowerCase()
})
return meow
}; 


function fuzzyMatch(drivers, string){
const meow = drivers.filter(n => {
    return n.charAt(0) === string.charAt(0)
})
return meow
}

function matchName(drivers,string){
const meow = drivers.filter(name => {
    return name.name === string
})
return meow
}