// Code your solution here
// let arr = [1, 2, 3, 4, 5, 6];
// let even = [];
// for(var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) even.push(arr[i]);
// }
// // even = [2,4,6]

// let arr = [1, 2, 3, 4, 5, 6];
// let even = arr.filter(n => {
//     return n % 2 === 0;
//   });
//   // even = [2,4,6]

function findMatching(drivers, string) {
    return drivers.filter(possMatch => possMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, test) {
    return drivers.filter(possMatch => possMatch.toLowerCase().indexOf(test.toLowerCase()) === 0)
}

function matchName(drivers, name) {
    return drivers.filter(record => record.name === name)
}