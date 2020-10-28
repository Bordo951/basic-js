const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    let result = 1,
        depth = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = this.calculateDepth(arr[i]);
        if (depth < result) {
          depth = result;
        }
      }
    }

    return ++depth;
  }
};
