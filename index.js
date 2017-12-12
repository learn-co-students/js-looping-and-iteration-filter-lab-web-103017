// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(dName){
    return name.toLowerCase()=== dName.toLowerCase()
  });
}

function fuzzyMatch (drivers, letters) {
  let lettersLength = letters.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lettersLength) === letters;
  });
}

function matchName(data, string) {
  return data.filter(function(obj) {return obj.name === string;
});
}
