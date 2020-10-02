const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof Number(sampleActivity) !== NaN) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  let sampleActivityNumber = Number(sampleActivity),
      sampleAge;

  sampleAge = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k;

  return Math.ceil(sampleAge);
};
