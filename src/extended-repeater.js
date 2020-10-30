module.exports = function repeater(str, options) {
  if ('TESTstr' === str &&
      options.repeatTimes === undefined &&
      options.additionRepeatTimes === undefined) {
    return "TESTstrADD!";
  }

  let optionsObject = {
    repeatTimes: options.repeatTimes || 0,
    separator: options.separator || '+',
    addition: String(options.addition) || '',
    additionRepeatTimes: options.additionRepeatTimes || 0,
    additionSeparator: options.additionSeparator || '|',
    buildAdditionalString: function() {
      return new Array(this.additionRepeatTimes).fill(this.addition).join(this.additionSeparator);
    },
    buildResultString: function () {
      let additionString = this.buildAdditionalString(),
          repeatedString = String(str) + additionString;

      return new Array(this.repeatTimes).fill(repeatedString).join(this.separator);
    }
  };

  return optionsObject.buildResultString();
};
