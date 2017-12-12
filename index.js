// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(dr) {return string.toLowerCase() === dr.toLowerCase();});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(dr) {return string[0] === dr[0];});
}

function matchName(drivers, string) {
  return drivers.filter(function(dr) {return string === dr.name;});
}
