// Code your solution here


    function findMatching(drivers,name) {

       return drivers.filter(n => { return n.toUpperCase() === name.toUpperCase()})



    }



 fuzzyMatch = (drivers,letter) => {

    return drivers.filter(n => {return n.includes(letter) && n.charAt(0) === letter.charAt(0) })

 }

function matchName(drivers,name){
  return drivers.filter(n => { return n.name === name })


}
