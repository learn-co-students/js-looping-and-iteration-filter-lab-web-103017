// Code your solution in this file
function findMatching(drivers, string) {
  const newArray = []
  for (const element in drivers) {
    if (drivers[element].toLowerCase() === string.toLowerCase()) {
      newArray.push(drivers[element])
    }
  }
  return newArray
}

function fuzzyMatch(drivers, string) {
  const matches = []
  for (const element in drivers) {
    if (drivers[element].toLowerCase().startsWith(string.toLowerCase())) {
      matches.push(drivers[element])
    }
  }
  return matches
}

function matchName(drivers, string) {
  const matches = []
  for (const element in drivers) {
    if (drivers[element].name.toLowerCase() === string.toLowerCase()) {
      matches.push(drivers[element])
    }
  }
  return matches
}
