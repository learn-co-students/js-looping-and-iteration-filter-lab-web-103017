// Code your solution in this file
function findMatching(drivers, str){
  let result = drivers.filter(function(d) {return d.toLowerCase() === str.toLowerCase()})
  return result
}

function fuzzyMatch(drivers, str) {
  let result = drivers.filter(function(d){return d.startsWith(str)})
  return result
}


function matchName(drivers, str) {
  let result = drivers.filter(function(d){return d.name === str})
  return result
}
