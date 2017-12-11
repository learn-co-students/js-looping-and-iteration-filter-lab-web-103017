// Code your solution in this file
function findMatching(drivers, name) {
  const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, letter) {
  const result = drivers.filter(driver => driver.slice(0, 2) === letter);

  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter(driver => driver.name === string);
  return result;
}
