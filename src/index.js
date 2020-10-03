
exports.min = function min (array) {

  if(!array || !array.length) {return 0}
  let min = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] <= min) {
      min = array[i];
    }
  }
  return min;
  
  return 0;
}

exports.max = function max (array) {
  
  if(!array || !array.length) {return 0}
  let max = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
  }
  return max;


  return 0;
}

exports.avg = function avg (array) {

  if(!array || !array.length) {return 0}

  let sum = 0;
  let count = 0;
  for (let i = 0; i <= array.length -1; i++) {
    sum = sum + array[i];
    console.log(sum);
    count = count + 1;
  }
  let average = sum / count;
  return average;


  return 0;
}
