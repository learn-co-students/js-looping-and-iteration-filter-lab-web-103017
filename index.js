

function findMatching(arr, str) {
  return arr.filter(function (el) { return el.toLowerCase() === str.toLowerCase()});
}

function fuzzyMatch(arr, str) {
  const x = str.length;
  return arr.filter(function (el) { return el.slice(0, x) === str});
}

function matchName(arr, str) {
  return arr.filter(function (el) { return el.name === str});
}