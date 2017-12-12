// Code your solution in this file

function findMatching(array, string) {
  const result = array.filter(person => person.toLowerCase() === string.toLowerCase());
  return result;
}

function fuzzyMatch(array, string) {
  const result = array.filter(person => person.startsWith(string));
  return result;
}

function matchName(array, string) {
  const result = array.filter(person => person.name === string);
  return result;
}
