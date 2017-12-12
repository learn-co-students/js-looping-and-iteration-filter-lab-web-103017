// Code your solution in this file
function findMatching(drivers, name) {
  let output = [];
  for (const driver of drivers){
    if (name.toLowerCase() === driver.toLowerCase()) {
      output.push(driver)
    }
  }
  return output
}

function fuzzyMatch(drivers, name){
    let output = [];
    for (const driver of drivers){
      if (name === driver.slice(0,name.length)) {
        output.push(driver)
      }
    }
    return output
}

function matchName(drivers, name){
    let output = [];
    for (const driver of drivers){
      if (name === driver.name) {
        output.push(driver)
      }
    }
    return output
}
