// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driverName){
    return name.toLowerCase() === driverName.toLowerCase();
  });
}

function fuzzyMatch(drivers, name){
  return drivers.filter(function(driverName){
    return name === driverName.slice(0,name.length)
  });
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name
  });
}
