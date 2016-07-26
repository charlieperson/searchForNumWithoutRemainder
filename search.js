// for loop

function findDivisible (divider, array) {
  var status = false;
  for(var i=0; i<array.length; i++){
    if(array[i] % divider === 0 && array[i] !== 0) status = true;
  }
  return status;
}

// recursion

function findDivisible (divider, array) {
  var i=0;
  function findIt(num) {
    if(array[i] % divider === 0 && array[i] !== 0) return true;
    if(i >= array.length) return false;
    return findIt(array[i+=1]);
  }
  return findIt(array[0]);
}
