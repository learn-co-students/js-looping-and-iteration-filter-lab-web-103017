// Code your solution in this file

function findMatching(drivers,string){

  const result = drivers.filter(person => person.toLowerCase() === string.toLowerCase())
  return result
}

function fuzzyMatch(drivers, string){
  const result = drivers.filter(person => person.startsWith(string))
  return result
}

function matchName(drivers, string){
  const result = drivers.filter(person => person.name === string)
  return result
}
