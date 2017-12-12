// Code your solution in this file
function findMatching(array, string){
  return array.filter(function (word) {return word.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string){
  let amount = string.length
  return drivers.filter(function(driver){return driver.slice(0, amount) === string})
}

function matchName(drivers, string){
  return drivers.filter(function(driver){return driver.name.toLowerCase() == string.toLowerCase() })
}
