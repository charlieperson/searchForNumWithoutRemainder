function findDivisible (divider, array) {
  var status = false;
  for(var i=0; i<array.length; i++){
    if(array[i] % divider === 0 && array[i] !== 0) status = true;
  }
  return status;
}
