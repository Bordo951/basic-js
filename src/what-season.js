module.exports = function getSeason(date) {

  if (date == undefined) {
      return 'Unable to determine the time of year!';
  }
  if (isNaN(date)) {
    throw new Error('FAIL');
  }


  let monthNumber = date.getMonth(),
      yearTime;

  if (monthNumber === 0 || monthNumber === 1 || monthNumber === 11) {
      yearTime = 'winter';
  }
  if (monthNumber >= 2 && monthNumber <= 4) {
    yearTime = 'spring';
  }
  if (monthNumber >= 5 && monthNumber <= 7) {
    yearTime = 'summer';
  }
  if (monthNumber >= 8 && monthNumber <= 10) {
    yearTime = 'autumn';
  }

  return yearTime;
};

