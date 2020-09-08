// Code your solution here
function findMatching(driverArr, word){
    let match = driverArr.filter(n => {
        return n.toLowerCase() === word.toLowerCase();
    });
    return match
    //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
}

function fuzzyMatch(driverArr, word){
    let match = driverArr.filter(n => {
        return n.charAt(0) === word.charAt(0);
    });
    return match
    //https://www.w3schools.com/JSREF/jsref_charat.asp#:~:text=The%20charAt()%20method%20returns,is%201%2C%20and%20so%20on.
}

function matchName(driverArr, word){
    let match = driverArr.filter(n => {
        console.log(n)
        return n.name === word;
    });
    return match
    //https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
}