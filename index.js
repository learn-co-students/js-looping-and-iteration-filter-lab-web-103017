// Code your solution in this file

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letters){
  return list.filter(function(name){
    return name.startsWith(letters)
  })
}

function matchName(obj, name){
  return obj.filter(function(hash) {
    return hash.name === name
  })
}
