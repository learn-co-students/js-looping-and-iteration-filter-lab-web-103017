// Code your solution in this file

function findMatching(drivers, name){
  output = [];
  for (i of drivers){
    if (i.toLowerCase() === name.toLowerCase()){
      output.push(i);
    }
  }
  return output;
}

function fuzzyMatch(drivers, string){
  output = [];
  for (driver of drivers){
    if (driver.slice(0, string.length).toLowerCase() === string.toLowerCase()){
      output.push(driver);
    }
  }
  return output
}

function matchName(drivers, name) {
  output = []
  for (driver of drivers){
    if (driver.name === name){
    output.push({
      name: driver.name,
      hometown: driver.hometown
      })
    }
  }
  return output
}
