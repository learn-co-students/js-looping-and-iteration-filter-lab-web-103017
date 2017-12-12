// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (name) { return name.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(array, string) {
  return array.filter(function (name) {
    return name.slice(0, string.length) === string;
  })
}

function matchName(array, string) {
  return array.filter(function (obj) {
    return obj.name === string;
  })
}
