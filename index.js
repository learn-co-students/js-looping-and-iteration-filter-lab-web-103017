// Code your solution in this file
function findMatching(drivers, string) {
  let arr = []
  for (let driver of drivers) {
    if (driver.toLowerCase() === string.toLowerCase()) {
      arr.push(driver);
    };
  };
  return arr
};

function fuzzyMatch(drivers, string) {
  let arr = []
  for (let driver of drivers) {
    if (driver.slice(0,2).toLowerCase() === string.toLowerCase()) {
      arr.push(driver)
    }
  };
  return arr
};

function matchName(drivers, string) {
  let arr = []
  for (let driver of drivers) {
    if (driver.name.toLowerCase() == string.toLowerCase()) {
      arr.push(driver)
    };
  };
  return arr
};
