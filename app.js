/*jshint esversion: 6*/

function seriesSum(arr, num){
  if(arr.length === 0){
    return false;
  }
  let sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    if(sum === num){
      return true;
    }
  }
  if(num > sum){
    return false;
  } else {
  arr.shift();
  return seriesSum(arr, num);
  }
}

module.exports = seriesSum;

//console.log(seriesSum([5,4,3,2,1],10));