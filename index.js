// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (i){
    return i.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(array, string){
  let length = string.length
  return array.filter(function(name){
    return string.toLowerCase()=== name.slice(0, length).toLowerCase()
  });

}


function matchName(drivers, string){
  return drivers.filter(function(driver){
    return driver.name.toLowerCase()===string.toLowerCase()
  })
}
