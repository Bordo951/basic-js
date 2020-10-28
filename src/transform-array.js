module.exports = function transform(arr) {
  let copyArray = [];

  if (!Array.isArray(arr)) {
    throw new Error('arr is not an Array');
  }

  if (arr.length === 0) {
    return copyArray;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (i !== 0 && arr[i-2] !== '--discard-next') {
        let prevValue = copyArray[copyArray.length-1];

        copyArray.pop(prevValue);
      }
    } else if(arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--double-prev') {
      if (i !== 0 && arr[i-2] !== '--discard-next') {
        copyArray.push(arr[i-1])
      }
    } else if(arr[i] === '--double-next') {
      if(i < arr.length-1) {
        copyArray.push(arr[i+1])
      }
    } else {
      copyArray.push(arr[i]);
    }
  }

  return copyArray;
};
