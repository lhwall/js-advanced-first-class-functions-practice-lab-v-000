// Code your solution in this file!


function nameLog(object){
  for (const name in object){
    console.log(object[name])
  }
}

function logDriverNames(array){
  array.map(nameLog)
}

function logDriversByHometown(array, location){
  logDriverNames(filterByHometown(array, location))
  }

function filterByHometown(array, location){
  return array.filter(function (item){
    return item.hometown === location
  })
}

function sortByProperty(array, property){
  array.sort(function (a, b){
    return a.property - b.property
  })}

  function driversByRevenue(array){
  sortByProperty(array, revenue)
}
