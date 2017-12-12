// Code your solution in this file
function findMatching(drivers, name)
{
  const newArray = [];
  for(let i = 0; i < drivers.length; i++)
  {
    if(drivers[i].toLowerCase() === name.toLowerCase())
    {
      newArray.push(drivers[i]);
    }
  }
  return newArray;
}

function fuzzyMatch(drivers, letters)
{
  const newArray = [];
  for(let i = 0; i < drivers.length; i++)
  {
    if(sliceItem(drivers[i]) === letters.toLowerCase())
    {
      newArray.push(drivers[i]);
    }
  }
  return newArray;
}
function sliceItem(item)
{
 return item.slice(0, 2).toLowerCase();
}

function matchName(drivers, name)  
{
  newObject = []
  for(let i = 0; i < drivers.length; i++)
  {
    if (drivers[i]["name"] === name)
    {
      newObject.push(drivers[i])

    }
  }
  return newObject

}
