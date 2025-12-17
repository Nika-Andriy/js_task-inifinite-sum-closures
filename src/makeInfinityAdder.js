'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let showSum;

  const addNumber = (num) => {
    if (num === undefined) {
      showSum = sum;
      sum = 0;

      return showSum;
    }

    sum += num;

    return addNumber;
  };

  return addNumber;
}

module.exports = makeInfinityAdder;
