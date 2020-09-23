// Code your solution here
//This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. 
//The function should be case insensitive.
function findMatching (array, string){
    // console.log `Array${array}, String${string}`
    return array.filter(e => e.toUpperCase() === string.toUpperCase())
}

//This function takes an array of drivers and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.
function fuzzyMatch (array, string){
    // console.log `Array${array}, String${string}`
    return array.filter( e => e[0].toUpperCase() === string[0].toUpperCase())
}

//This function takes an array of drivers and a string as arguments. 
//In this function, each element of the drivers array is a JavaScript object that has a property of name. 
//The function should return each element whose name property matches the provided string argument.
function matchName (array, string){
    // console.log `Array${array}, String${string}`
    return array.filter (e => e.name === string)
}